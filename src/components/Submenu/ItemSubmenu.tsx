interface itemsProps {
  name: string;
}

const ItemSubmenu = (props: itemsProps) => {
  return (
    <div>
      <button
        className="w-36 h-8 bg-white border rounded border-gray-200 font-semibold text-xs
      hover:bg-secondaryColor hover:text-white duration-100"
      >
        {props.name}
      </button>
    </div>
  );
};

export default ItemSubmenu;
