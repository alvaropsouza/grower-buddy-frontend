function Divider(props: { content: string }) {
  const { content } = props;
  return (
    <div className="relative flex w-[90%] items-center p-2 text-[#afafaf]">
      <small className="flex-grow border-t border-[#dbdbdb76]">{content}</small>
    </div>
  );
}

export { Divider };
