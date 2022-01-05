import Mongoose from "mongoose";

const videoSchema = new Mongoose.Schema({
  // 이 코드 안에 비디오 형식을 작성
  title: { type: String, required: true, trim: true, maxlength: 80 },
  description: { type: String, required: true, trim: true, minlength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0].split(",").map((word) => (word.startswith("#") ? word : `#${word}`));
});

const Video = Mongoose.model("Video", videoSchema);
export default Video;
