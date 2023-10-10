import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" ref={`noopener norefferer`} {...props} />;
};

function Callout(props: any) {
  return (
    <div className="px-4 py-3 border border-neutral-200 bg-neutral-50 rounded text-sm flex items-center text-neutral-900 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const components = {
  a: CustomLink,
  Callout,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral">
      <Component components={components} />
    </article>
  );
}
