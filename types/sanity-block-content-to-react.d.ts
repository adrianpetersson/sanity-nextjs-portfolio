/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@sanity/block-content-to-react" {
  import { ComponentType } from "react";

  interface BlockContentProps {
    [key: string]: any;
    blocks: any;
    dataset?: string;
    imageOptions?: any;
    projectId?: string;
    serializers?: any;
  }

  const BlockContent: ComponentType<BlockContentProps>;
  export default BlockContent;
}
