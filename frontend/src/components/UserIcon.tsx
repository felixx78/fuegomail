import DefaultUserIcon from "./DefaultUserIcon";

const letterColors = {
  A: "#FFCCCB",
  B: "#FFE4E1",
  C: "#FFB6C1",
  D: "#F5DEB3",
  E: "#D3D3D3",
  F: "#B0E0E6",
  G: "#E0FFFF",
  H: "#F5F5DC",
  I: "#FFFFE0",
  J: "#F0FFF0",
  K: "#F8F8FF",
  L: "#FFCCCB",
  M: "#FFE4E1",
  N: "#FFB6C1",
  O: "#F5DEB3",
  P: "#D3D3D3",
  Q: "#B0E0E6",
  R: "#E0FFFF",
  S: "#F5F5DC",
  T: "#FFFFE0",
  U: "#F0FFF0",
  V: "#F8F8FF",
  W: "#FFCCCB",
  X: "#FFE4E1",
  Y: "#FFB6C1",
  Z: "#F5DEB3",
};

function UserIcon({ name }: { name: string }) {
  if (!name.length) return <DefaultUserIcon />;

  return (
    <div
      className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full text-primary-text"
      style={{
        backgroundColor: letterColors[name[0] as keyof typeof letterColors],
      }}
    >
      {name[0]}
    </div>
  );
}
export default UserIcon;
