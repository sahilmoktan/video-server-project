import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //url 
      required: true,
    },
    thumbnail: {
      type: String, //url 
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, //url
      required: true,
    },
    views: {
      type: Number, //url
      required: true,
    },
    idPublished: {
      type: Boolean, //url
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
