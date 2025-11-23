/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import { urlFor } from '../sanity';

interface SerializerProps {
  children?: React.ReactNode;
  node?: any;
  type?: string;
}

export function defaultSerializer(body?: any) {
  const serializer = {
    list: (props: any) => {
      const { type } = props;
      const bullet = type === 'bullet';
      if (bullet) {
        return (
          <ul className="[&_li]:list-item [&_li]:mb-4 [&_li]:list-inside [&_li]:list-square">
            {props.children}
          </ul>
        );
      }
      return <ol>{props.children}</ol>;
    },
    listItem: (props: any) => <li>{props.children}</li>,
    types: {
      image(props: any) {
        return (
          <div className="flex items-center justify-center mt-2.5 mr-2.5">
            <img
              src={urlFor(props.node.asset).auto('format').url() || ''}
              alt=""
              className="max-w-full max-h-full"
            />
          </div>
        );
      },
      block(props: any) {
        switch (props.node.style) {
          case 'h2':
            return (
              <h2 className="text-[30px] mt-4 mb-2.5" {...body}>
                {props.children}
              </h2>
            );
          case 'h3':
            return (
              <h3 className="text-[22px] mt-4 mb-5" {...body}>
                {props.children}
              </h3>
            );
          case 'label':
            return (
              <span
                className="block text-[13px] bg-[#ebebeb] my-5 mx-0 py-1.5 px-2.5 rounded-[3px] text-[#757575]"
                {...body}
              >
                {props.children}
              </span>
            );
          case 'normal':
            return <p {...body}>{props.children}</p>;
          default:
            return null;
        }
      },
    },
  };
  return serializer;
}
