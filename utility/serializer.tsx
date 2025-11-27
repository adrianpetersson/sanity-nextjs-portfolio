/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { urlFor } from "../sanity";

interface SerializerProps {
  children?: React.ReactNode;
  node?: any;
  type?: string;
}

export function defaultSerializer(body?: any) {
  const serializer = {
    list: (props: any) => {
      const { type } = props;
      const bullet = type === "bullet";
      if (bullet) {
        return (
          <ul className="[&_li]:list-square [&_li]:mb-4 [&_li]:list-item [&_li]:list-inside">
            {props.children}
          </ul>
        );
      }
      return <ol>{props.children}</ol>;
    },
    listItem: (props: any) => <li>{props.children}</li>,
    types: {
      block(props: any) {
        switch (props.node.style) {
          case "h2":
            return (
              <h2 className="mt-4 mb-2.5 text-[30px]" {...body}>
                {props.children}
              </h2>
            );
          case "h3":
            return (
              <h3 className="mt-4 mb-5 text-[22px]" {...body}>
                {props.children}
              </h3>
            );
          case "label":
            return (
              <span
                className="mx-0 my-5 block rounded-[3px] bg-[#ebebeb] px-2.5 py-1.5 text-[13px] text-[#757575]"
                {...body}
              >
                {props.children}
              </span>
            );
          case "normal":
            return <p {...body}>{props.children}</p>;
          default:
            return null;
        }
      },
      image(props: any) {
        return (
          <div className="mt-2.5 mr-2.5 flex items-center justify-center">
            <img
              alt=""
              className="max-h-full max-w-full"
              src={urlFor(props.node.asset).auto("format").url() || ""}
            />
          </div>
        );
      },
    },
  };
  return serializer;
}
