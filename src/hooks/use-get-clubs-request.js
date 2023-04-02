import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { sendClubsRequest } from "../store/clubs-slice";
import { CLUBS_URL, UNSUCCESSFUL_REQUEST } from "../util/config";
const useGetClubsRequest = () => {
  const clubs = useSelector((state) => state.clubsList);
  const dispatch = useDispatch();
  const getClubs = useCallback(() => {
    dispatch(sendClubsRequest(CLUBS_URL, UNSUCCESSFUL_REQUEST));
  }, [dispatch]);
  return {
    clubs,
    getClubs,
  };
};
export default useGetClubsRequest;
