import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Post`.
 */
export type PostProps = SliceComponentProps<Content.PostSlice>;

/**
 * Component for "Post" Slices.
 */
const Post = ({ slice }: PostProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for post (variation: {slice.variation}) Slices
    </section>
  );
};

export default Post;
