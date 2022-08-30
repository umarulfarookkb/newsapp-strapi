import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/NewsCard";
import AddNewsDialog from "../../components/AddNewsDialog";

function NewsList() {
  const [newsList, setNewsList] = useState({});
  const [locale, setLocale] = useState("en");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      const data = await axios.get(
        "https://mighty-bayou-30636.herokuapp.com/api/newsposts?locale=" +
          locale
      );
      // console.log(data)
      setNewsList(data);
    }
    fetchNews();
  }, [locale]);

  console.log(newsList);

  function setLang() {
    setLocale(window.locales.value);
  }

  function showAddNewsDialog() {
    setShowModal(!showModal);
  }

  return (
    <div className="newslist">
      <div className="newslistbreadcrumb">
        <div className="newslisttitle">
          <h3>World News</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "4px" }}>
            <button onClick={showAddNewsDialog}>Add News</button>
          </div>
          <div>
            <select name="locales" id="locales" onChange={setLang}>
              <option value="en">English</option>
              <option value="fr-FR">French</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        {newsList?.data?.data
          ?.sort((a, b) =>
            b.attributes.createdAt.localeCompare(a.attributes.createdAt)
          )
          ?.map((newsItem, i) => {
            // console.log(newsItem)
            return (
              //  <h1 key={i}>{newsItem.attributes.title}</h1>
              <NewsCard
                newsItem={newsItem.attributes}
                id={newsItem.id}
                key={i}
              />
            );
          })}
      </div>
      {showModal ? <AddNewsDialog closeModal={showAddNewsDialog} /> : null}
    </div>
  );
}
export default NewsList;
