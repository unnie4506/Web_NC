function User({ avatar, name, dvi }) {
  return (
    <div className="user-card"> 
      <img className="logo" src={avatar} alt={name} />
      <p><b>Họ và tên:</b> {name}</p>
      <p><b>Đơn vị:</b> {dvi}</p>
      <button>Xem chi tiết</button>
    </div>
  );
}

export default User;
