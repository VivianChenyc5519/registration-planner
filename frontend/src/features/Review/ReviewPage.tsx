import ReviewBanner from "../../components/Banner/ReviewBanner";
import { useParams } from "react-router-dom";

export default function CourseReviewPage() {
  const { courseId } = useParams<{ courseId: string }>();
  if (!courseId) {
    return <p>Invalid Course ID</p>;
  }
  return (<ReviewBanner />);
}
