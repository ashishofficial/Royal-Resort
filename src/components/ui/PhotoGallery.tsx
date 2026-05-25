"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Lightbox, type LightboxItem } from "./Lightbox";

type GalleryContextType = {
  register: (item: LightboxItem) => void;
  open: (src: string) => void;
};

const GalleryContext = createContext<GalleryContextType | null>(null);

/**
 * Wraps a group of PhotoFrames so they share a single lightbox with
 * prev/next navigation. Each PhotoFrame inside registers its image on
 * mount; clicking any photo opens the shared modal at the right index.
 *
 * Standalone PhotoFrames (no PhotoGallery wrapper) keep their own
 * single-image lightbox — backward compatible.
 */
export function PhotoGallery({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const itemsRef = useRef<LightboxItem[]>([]);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const register = useCallback((item: LightboxItem) => {
    if (itemsRef.current.some((x) => x.src === item.src)) return;
    itemsRef.current = [...itemsRef.current, item];
    setItems(itemsRef.current);
  }, []);

  const open = useCallback((src: string) => {
    const idx = itemsRef.current.findIndex((x) => x.src === src);
    setOpenIndex(idx >= 0 ? idx : null);
  }, []);

  return (
    <GalleryContext.Provider value={{ register, open }}>
      <div className={className}>{children}</div>
      <Lightbox
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  return useContext(GalleryContext);
}
