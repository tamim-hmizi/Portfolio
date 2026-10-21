import type { ReactNode } from "react";

/** Emphasizes a key technology or result inside running text. */
const Highlight = ({ children }: { children: ReactNode }) => <strong className="text-yellow-400">{children}</strong>;

export default Highlight;
