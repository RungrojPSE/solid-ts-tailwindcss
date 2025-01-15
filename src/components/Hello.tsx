import type { Component } from "solid-js";

interface Props {
  name: string;
  age: number;
  pins: string[];
}

interface Data {
  data: Props;
}

const User: Component<Data> = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default function Hello() {
  const sample: Props = { name: "Jan", age: 18, pins: ["1213", "3221"] };
  return (
    <>
      <User data={sample} />
    </>
  );
}