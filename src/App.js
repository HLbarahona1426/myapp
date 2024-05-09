const user = {
  name: 'Dodge challeger         HENRY 3ª SOFTWARE', 
  imageUrl: 'https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/05/27100521/Car-history-Dodge-Challenger-Cover-27-05.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
