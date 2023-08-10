export const PostOwner = ({
  userImagePath, 
  username, 
  replyText, 
  likeNum, 
}) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/Me.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">
          {name} {studentID}
        </span>
      </div>

      <span>{detail}</span>

      <div className="d-flex align-items-center gap-1">
        {likeNum > 0 && <img src="/like.svg" width={20}></img>}
        {likeNum > 0 && <span className="text-muted">{likeNum} คน</span>}
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
   