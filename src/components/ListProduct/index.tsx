import "./ListProduct.css";
import { Product } from "../TypeInterFace";

interface Props {
  list: Product[];
  onDelete: (id: string) => void;
  onEdit: (itemProduct: Product) => void;
}

export const ListProduct: React.FC<Props> = ({ list, onDelete, onEdit }) => {
  return (
    <div className="ant-list-items">
      <div className="ant-list-item">
        {list.map((item, index) => (
          <div className="ant-list-item-meta" key={index}>
            <div className="ant-list-item-meta-avatar">
              <span className="ant-image-img">
                <img src={item.avatar} style={{ width: 100 }} />
              </span>
            </div>
            <div className="ant-list-item-meta-content">
              <h4 className="ant-list-item-meta-title">
                <a>{item.name}</a>
              </h4>
              <div className="ant-list-item-meta-description">
                {item.content}
              </div>
            </div>
            <ul className="ant-list-item-action">
              <li>
                <a onClick={() => onEdit(item)}>Edit</a>
              </li>
              <li>
                <a onClick={() => onDelete(item.id)}>Remove</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
