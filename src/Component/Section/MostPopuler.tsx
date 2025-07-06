import { Sparkles, Star } from "lucide-react";
import Card from "../layout/Card";
import Container from "../layout/Container";

const MostPopularBlog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "January 12, 2023",
      title: "How to Create an Effective Design Portfolio",
      description:
        "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-purple-500 via-pink-500 to-blue-500",
    },
    {
      id: 2,
      date: "January 12, 2023",
      title: "Building a Navigation Component with Variables",
      description:
        "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-cyan-500 via-teal-500 to-blue-600",
    },
    {
      id: 3,
      date: "January 12, 2023",
      title: "How Can Designers Prepare for the Future?",
      description:
        "Experience the sublime in SaaS. Join countless satisfied customers who have chosen Sublime as their go-to SaaS platform",
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-pink-500 via-purple-500 to-cyan-500",
    },
  ];

  return (
    <section className="w-full max-h-screen py-16 my-16">
      <Container className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center mb-12">
          <div className="flex items-center justify-between gap-8 w-full">
            <h1 className="text-4xl font-normal text-gray-900 leading-tight">
              Most
              <br />
              Popular Blog
            </h1>

            <div className="flex items-center justify-between gap-6 w-[50%]">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles />
                  <Star />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn from our experts in multiple fields of business that
                  will help your team grow.
                </p>
              </div>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <div className="p-0">
                {/* Image Section with 3D Graphics */}
                <div className="relative h-64 bg-black rounded-t-lg overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* 3D Geometric Shape Placeholder */}
                    <div
                      className={`w-32 h-32 bg-gradient-to-br ${post.gradient} rounded-lg transform rotate-12 group-hover:rotate-6 transition-transform duration-300 shadow-2xl`}
                    >
                      <div className="w-full h-full bg-gradient-to-tr from-white/20 to-transparent rounded-lg" />
                    </div>
                    <div
                      className={`absolute w-24 h-24 bg-gradient-to-br ${post.gradient} rounded-lg transform -rotate-12 translate-x-8 translate-y-4 group-hover:translate-x-6 transition-transform duration-300 opacity-80 shadow-xl`}
                    >
                      <div className="w-full h-full bg-gradient-to-tr from-white/30 to-transparent rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-4">
                  <p className="text-sm text-gray-500 font-medium">
                    {post.date}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MostPopularBlog;
