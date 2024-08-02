import DefaultUserIcon from "./DefaultUserIcon";

const letterColors = {
  A: "#F7C6C7",
  B: "#F8D7DA",
  C: "#E3B6D1",
  D: "#B3CDE0",
  E: "#D0E2E8",
  F: "#B0D9E8",
  G: "#C8E6C9",
  H: "#D4E157",
  I: "#F0F4C3",
  J: "#F5C6C7",
  K: "#F8D7DA",
  L: "#F7C6C7",
  M: "#FAD6C1",
  N: "#F5C6C7",
  O: "#F4A3A4",
  P: "#E1BEE7",
  Q: "#B3CDE0",
  R: "#B0D9E8",
  S: "#C8E6C9",
  T: "#E6EE9C",
  U: "#D0E2E8",
  V: "#F8B4B4",
  W: "#F7C6C7",
  X: "#FAD6C1",
  Y: "#F5C6C7",
  Z: "#F4A3A4",
};

function UserIcon({ name }: { name: string }) {
  if (!name.length) return <DefaultUserIcon />;

  return (
    <div
      className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full text-primary-text"
      style={{
        backgroundColor:
          letterColors[name[0].toUpperCase() as keyof typeof letterColors],
      }}
    >
      {name[0].toUpperCase()}
    </div>
  );
}
export default UserIcon;
