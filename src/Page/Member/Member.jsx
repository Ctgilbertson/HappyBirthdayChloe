import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import { arrayMove, SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./photos.jsx";
import Layout from "../../Layout";

/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

export default function Member() {
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <Layout>

      <div class="text-center">
        <h1 class="display-4">CHLOPHER TRIPS</h1>
        <h3>All Our Happy Memories</h3>
        <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      </div>
    </Layout>
  );
}