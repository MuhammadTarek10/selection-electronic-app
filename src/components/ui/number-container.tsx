"use client";

type ContainerProps = {
  title: string;
  value: string;
};

type IProps = {
  props: ContainerProps;
};

export const NumberContainer = ({ props }: IProps) => {
  const { title, value } = props;

  return (
    <div className="bg-gray-700 px-12 py-8 flex justify-center rounded-xl">
      <h1 className="text-4xl">
        {value} :{title}
      </h1>
    </div>
  );
};
