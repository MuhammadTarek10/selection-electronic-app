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
    <div className="bg-gray-700 px-12 py-8 flex justify-between rounded-xl">
      <h1 className="text-2xl">{value}</h1>
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};
