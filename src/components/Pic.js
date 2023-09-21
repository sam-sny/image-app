import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./homepage.css";

const Pic = ({ src, alt, id, index, onImageDrop }) => {
  // Create refs for drag and drop
  const ref = useRef(null);

  // Use useDrag to make the component draggable
  const [, drag] = useDrag({
    type: "PIC",
    item: { id, index },
  });

  // Use useDrop to make the component a drop target
  const [, drop] = useDrop({
    accept: "PIC",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      onImageDrop(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  // Combine the drag and drop refs
  drag(drop(ref));

  return (
    <div className="pictures" ref={ref}>
      <img src={src} alt={alt} style={{ width: "200px", height: "200px" }} />
    </div>
  );
};

export default Pic;
