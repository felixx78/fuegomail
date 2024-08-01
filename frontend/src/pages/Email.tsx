import { useNavigate, useParams } from "react-router-dom";
import emails from "./mails";
import { ArrowLeft } from "@phosphor-icons/react";
import UserIcon from "../components/UserIcon";

function Email() {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = emails.find((i) => i.id === id);

  if (!data) return;

  return (
    <div className="pb-4">
      <div className="mx-auto h-[90vh] min-h-[300px] max-w-[1200px] rounded bg-white px-5 py-3">
        <div className="text-primary-text">
          <div className="mb-4">
            <button
              onClick={() => navigate("/inbox")}
              className="cursor-pointer"
            >
              <ArrowLeft size={30} />
            </button>
          </div>

          <p className="mb-4 text-3xl">{data?.subject}</p>

          <div className="mb-6 flex items-center gap-4">
            <UserIcon name={data.sender.name} />
            <div className="text-sm">
              <p>{`${data.sender.name} <${data.sender.email}>`}</p>
              <p>to {data.recipient.name}</p>
            </div>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            numquam porro harum ut pariatur nulla in aut obcaecati, soluta,
            laboriosam eaque esse adipisci consectetur cumque eligendi ea
            incidunt, voluptatem deserunt. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magni numquam porro harum ut pariatur
            nulla in aut obcaecati, soluta, laboriosam eaque esse adipisci
            consectetur cumque eligendi ea incidunt, voluptatem deserunt. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Magni numquam
            porro harum ut pariatur nulla in aut obcaecati, soluta, laboriosam
            eaque esse adipisci consectetur cumque eligendi ea incidunt,
            voluptatem deserunt.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Email;
