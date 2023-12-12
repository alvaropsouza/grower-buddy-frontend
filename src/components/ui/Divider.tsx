function Divider(props: { content: string }) {
  const { content } = props;
  return (
    <div className="relative mt-5 flex w-[90%] items-center p-2 text-[#afafaf]">
      <small className="flex-grow border-t border-[#dbdbdb]">{content}</small>
    </div>
  );
}

export { Divider };
