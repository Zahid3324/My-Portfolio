import mongoose, { Schema } from "mongoose";
import type { Project } from "@/types";

const projectSchema = new Schema<Project>(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    category: { type: String, required: true, trim: true, maxlength: 100 },
    description: { type: String, required: true, trim: true, maxlength: 800 },
    technologies: {
      type: [{ type: String, trim: true, maxlength: 60 }],
      default: [],
    },
    preview: {
      type: String,
      default: "project",
    },
    image: { type: String, trim: true },
    href: { type: String, trim: true, maxlength: 500 },
    githubUrl: { type: String, trim: true, maxlength: 500 },
    order: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
    overview: { type: String },
    features: [{ type: String }],
    architecture: { type: String },
    challengesSolved: { type: String },
  },
  { timestamps: true, strict: false },
);

const ProjectModel =
  mongoose.models.Project ?? mongoose.model<Project>("Project", projectSchema);

export default ProjectModel;
