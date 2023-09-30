import { allBlogs } from "contentlayer/generated";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allBlogs.map((b) => (
        <div key={b._id}>
          <p>{b.title}</p>
          <span dangerouslySetInnerHTML={{ __html: b.body.html }} />
        </div>
      ))}
    </main>
  );
}
