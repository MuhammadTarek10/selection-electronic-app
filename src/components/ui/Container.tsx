type ContainerProps = {
  title: string;
  value: string;
};

export const Container = ({ props }: { props: ContainerProps }) => {
  const { title, value } = props;

  return (
    <div className="flex justify-center bg-gray-700 py-12 p-8 rounded-lg gap-4">
      <h1 className="font-bold text-4xl">
        {value} :{title}
      </h1>
    </div>
  );
};
