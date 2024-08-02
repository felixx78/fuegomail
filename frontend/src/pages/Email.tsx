import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import UserIcon from "../components/UserIcon";
import { useQuery } from "react-query";
import Emails from "../api/emails";
import DOMPurify from "dompurify";
import Spinner from "../components/Spinner";

function Email() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <p></p>;

  const { data, error } = useQuery({
    queryKey: ["email-by-id", id],
    queryFn: () => Emails.byId(id),
    retry: 1,
  });

  if (error)
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center">
        <p className="mb-4 text-4xl">Not found</p>
        <Link to="/inbox" className="hover:underline">
          Go back
        </Link>
      </div>
    );

  if (!data) return <Spinner screen />;
  const sanitizedHtml = DOMPurify.sanitize(data.html);

  return (
    <div className="pb-4">
      <div className="mx-auto h-[90vh] min-h-[300px] max-w-[1200px] overflow-y-auto rounded bg-white px-5 py-3">
        <div className="text-primary-text">
          <div className="mb-4">
            <button
              onClick={() => navigate("/inbox")}
              className="cursor-pointer"
            >
              <ArrowLeft size={30} />
            </button>
          </div>

          <p className="mb-4 text-3xl">{data.subject}</p>

          <div className="mb-6 flex items-center gap-4">
            <UserIcon name={data.sender_name} />
            <div className="text-sm">
              <p>{`${data.sender_name} <${data.sender_email}>`}</p>
            </div>
          </div>

          <div>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Email;
