import User from "./user";
import avatar1 from "../assets/1.jpg";
import avatar2 from "../assets/2.jpg";
import avatar3 from "../assets/3.jpg";
import avatar4 from "../assets/4.jpg";
import avatar5 from "../assets/5.jpg";
import avatar6 from "../assets/6.jpg";
import avatar7 from "../assets/7.jpg";
import avatar8 from "../assets/8.jpg";
import avatar9 from "../assets/9.jpg";

function UserList() {
  const users = [
    {
      name: "Nguyễn Thảo Uyên",
      dvi: "Phòng Thiết Kế",
      avatar: avatar1,
    },
    {
      name: "Lưu Thị Ngọc Lành",
      dvi: "Phòng Nhân sự",
      avatar: avatar2,
    },
      {
      name: "Nguyễn Nữ Anh Thư",
      dvi: "Phòng Chăm sóc khách hàng",
      avatar: avatar3,
    },
      {
      name: "Y Đình",
      dvi: "Phòng Hành chính",
      avatar: avatar4,
    },
    {
      name: "Phan Thanh Thành",
      dvi: "Phòng IT",
      avatar: avatar5,
    },
    {
      name: "Phạm Tạ Quốc Thịnh",
      dvi: "Phòng Kỹ Thuật",
      avatar: avatar6,
    },
    {
      name: "Trần Đình Khánh",
      dvi: "Phòng Kế toán",
      avatar: avatar7,
    },
    {
      name: "Trương Gia Huy",
      dvi: "Phòng Giám đốc",
      avatar: avatar8,
    },
    {
      name: "Lương Ngọc Thuận",
      dvi: "Phòng Thư ký",
      avatar: avatar9,
    },

  ];
  return (
    <div className="user-list">
      {users.map((user) => (
        <User
          avatar={user.avatar}
          name={user.name}
          dvi={user.dvi}
        />
      ))}
    </div>
  );
}

export default UserList;