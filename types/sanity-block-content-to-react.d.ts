declare module '@sanity/block-content-to-react' {
  import { ComponentType } from 'react';

  interface BlockContentProps {
    blocks: any;
    serializers?: any;
    projectId?: string;
    dataset?: string;
    imageOptions?: any;
    [key: string]: any;
  }

  const BlockContent: ComponentType<BlockContentProps>;
  export default BlockContent;
}
