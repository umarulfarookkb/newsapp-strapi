import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/NewsCard";
import AddNewsDialog from "../../components/AddNewsDialog";
import { Button } from "@cred/neopop-web/lib/components";

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
            <Button
              colorConfig={{
                backgroundColor: "#0d0d0d",
                borderColor: "#E5FE40",
                color: "#ffffff",
                disabledColors: {
                  backgroundColor: "#8A8A8A",
                  color: "rgba(255,255,255, 0.5)",
                  edgeColors: {
                    bottom: "#E0E0E0",
                    left: "transparent",
                    right: "#EFEFEF",
                    top: "transparent",
                  },
                },
                edgeColors: {
                  bottom: "#67721F",
                  left: "transparent",
                  right: "#A2B42D",
                  top: "transparent",
                },
              }}
              colorMode="dark"
              kind="elevated"
              size="medium"
              textStyle={{
                fontSize: 18,
                fontType: "heading",
                fontWeight: 800,
              }}
              variant="secondary"
              onClick={showAddNewsDialog}
            >
              Add News
            </Button>
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
