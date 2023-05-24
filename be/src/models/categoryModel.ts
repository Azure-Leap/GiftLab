import { Schema, model } from "mongoose";

export interface ICategoryModel {
  title: String;
  description: String;
  image: String;
  province_id: Number;
}

// export const EnumCategoryStatus = {
//   ACTIVE: "ACTIVE",
//   INACTIVE: "INACTIVE",
// } as const;

const categorySchema = new Schema<ICategoryModel>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    // status: {
    //   type: String,
    //   enum: [EnumCategoryStatus.ACTIVE, EnumCategoryStatus.INACTIVE],
    //   default: EnumCategoryStatus.ACTIVE,
    // },
    image: {
      type: String,
      required: true,
    },
    province_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = model<ICategoryModel>("Category", categorySchema);

export default Category;
