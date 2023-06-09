import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getCurrentUser, removeUser } from "../../store/feature/userSlicer";
import { removeAuth } from "../../store/feature/authSlicer";

export default function DashBoardPage() {
  const currentUserData = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  return (
    <>
      <div className=" min-h-screen">
        <div className="flex justify-between px-7 items-center bg-blue-500 text-white h-12">
          <div className="text-2xl font-bold">Logo</div>
          <div>
            <button
              className="rounded-md bg-blue-400 p-2"
              onClick={() => {
                dispatch(removeAuth());
                toast.success("Logout Successful");
                dispatch(removeUser());
              }}
            >
              LogOut
            </button>
          </div>
        </div>
        <div className="shadow-lg translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] absolute rounded-2xl w-[80%] md:w-[55%] h-[50%] px-2">
          <div className="lg:flex md:justify-evenly block items-center w-full h-full p-1">
            <div className="flex justify-center flex-col items-center mr-2">
              <img
                src={currentUserData.file}
                alt="image"
                width="150px"
                height="100px"
                className="rounded-full border border-black"
              />
              <p className="pt-6 text-xl lg:text-3xl font-bold text-">
                {currentUserData.name}
              </p>
            </div>
            <hr className=" w-1 bg-blue-400 rounded-sm h-[80%] lg:block hidden" />
            <div className="ms-2">
              <h3 className="ms-4 font-bold text-center my-3 uppercase">
                Contact Details
              </h3>
              <div className=" text-center lg:text-start">
                <p className="whitespace-nowrap">
                  Email:{" "}
                  <span className="text-blue-500">{currentUserData.email}</span>
                </p>
                <p className="whitespace-nowrap">
                  Phone.No:{" "}
                  <span className="font-semibold">
                    {currentUserData.phoneNumber}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
