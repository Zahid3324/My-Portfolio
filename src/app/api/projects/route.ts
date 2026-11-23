import { connection, NextResponse } from "next/server";
import { sampleProjects } from "@/data/portfolioData";
import { connectToDatabase } from "@/lib/mongodb";
import ProjectModel from "@/models/Project";

export async function GET() {
  await connection();

  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { projects: sampleProjects, source: "sample" },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    await connectToDatabase();
    const records = await ProjectModel.find({ isPublished: true })
      .sort({ order: 1, createdAt: -1 })
      .lean();

    return NextResponse.json(
      {
        projects: records.map((project) => ({
          ...project,
          _id: String(project._id),
        })),
        source: "database",
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Could not load portfolio projects from MongoDB.", error);
    return NextResponse.json(
      {
        projects: sampleProjects,
        source: "sample",
        warning: "MongoDB is unreachable. Showing sample projects.",
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  }
}
