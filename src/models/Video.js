import Mongoose from "mongoose";

const videoSchema = new Mongoose.Schema({
  // 이 코드 안에 비디오 형식을 작성
  title: { type: String, required: true, trim: true, maxlength: 80 },
  fileUrl: { type: String, required: true },
  thumbUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, minLength: 2 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
  },
  comments: [
    { type: Mongoose.Schema.Types.ObjectId, required: true, ref: "Comment" },
  ],
  owner: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = Mongoose.model("Video", videoSchema);
export default Video;
