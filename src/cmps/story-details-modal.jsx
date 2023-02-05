import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import {
  addLikeOrComment,
  closeStoryForwardModal,
  updateCurrentStory,
} from "../store/story.actions.js";
import Avatar from "@mui/material/Avatar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heartBlack from "../assets/icons/heart black.svg";
import heartRed from "../assets/icons/heart red.svg";
import smileyBlack from "../assets/icons/smileyBlack.svg";
import { HeartSignContainer } from "./heart-sign-container";
import EmojiPicker from "emoji-picker-react";
import { utilService } from "../assets/services.js/util.service.js";

const style = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  height: 728,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "1%",
};

export function StoryForwardModal() {
  const isStoryForwardModalOpen = useSelector(
    (storeState) => storeState.storyModule.isStoryForwardModalOpen
  );
  const user = useSelector((storeState) => storeState.userModule.user);
  const [text, setText] = useState("");
  const currentStory = useSelector(
    (storeState) => storeState.storyModule.currentStory
  );
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  function handleChange(e) {
    setText(e.target.value);
    console.log(text);
  }

  function addNewComment() {
    let updatedStory;
    updatedStory = {
      ...currentStory,
      comments: [
        ...currentStory.comments,
        {
          _id: utilService.makeId(),
          timestamp: new Date().getTime(),
          by: {
            _id: user._id,
            fullname: user.fullname,
            imgUrl: user.imgUrl,
          },
          txt: text,
          likedBy: [],
        },
      ],
    };
    addLikeOrComment(updatedStory);
    setText("");
    updateCurrentStory(updatedStory);
  }

  function openEmojiPicker() {
    setShowEmojiPicker(!showEmojiPicker);
  }

  function onEmojiClick(event, emojiObject) {
    setChosenEmoji(emojiObject);
    setShowEmojiPicker(false);
    setText((prev) => prev + event.emoji);
  }

  function dislikeComment(comment) {
    let updatedStory;
    let updatedComments = [];
    let commentWithoutLike = {
      ...comment,
      likedBy: comment.likedBy.filter((like) => like._id !== user._id),
    };
    currentStory.comments.map((c) => {
      if (c._id === commentWithoutLike._id) {
        updatedComments.push(commentWithoutLike);
      } else {
        updatedComments.push(c);
      }
    });
    updatedStory = {
      ...currentStory,
      comments: updatedComments,
    };
    addLikeOrComment(updatedStory);
    updateCurrentStory(updatedStory);
  }

  function likeComment(comment) {
    let updatedStory;
    let updatedComments = [];
    currentStory.comments.map((c) => {
      console.log("compair", c._id, comment._id);
      if (c._id === comment._id) {
        updatedComments.push({
          _id: utilService.makeId(),
          by: {
            _id: user._id,
            fullname: user.fullname,
            imgUrl: user.imgUrl,
          },
          txt: c.txt,
          likedBy: [
            ...c.likedBy,
            { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl },
          ],
        });
      } else {
        updatedComments.push(c);
      }
      return updatedComments;
    });

    updatedStory = {
      ...currentStory,
      comments: updatedComments,
    };
    addLikeOrComment(updatedStory);
    updateCurrentStory(updatedStory);
  }

  return (
    <Modal
      open={isStoryForwardModalOpen}
      onClose={closeStoryForwardModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div className="story-forward-modal">
          <div className="blackBG">
            {currentStory.postImg.length > 1 ? (
              <Slider dots={true} infinite={false}>
                {currentStory.postImg.map((img) => (
                  <img
                    key={img}
                    className="image-slider"
                    src={img}
                    alt="storyImg"
                  />
                ))}
              </Slider>
            ) : (
              <img className="image" src={currentStory?.postImg[0]} alt="img" />
            )}
          </div>
          <div className="right-section">
            <div className="full-scroll">
              <div className="header">
                <div className="avatar-row">
                  <Avatar
                    sx={{
                      width: "28px",
                      height: "28px",
                      marginRight: "12px",
                      alignSelf: "center",
                    }}
                    src={currentStory?.by?.userImg}
                    alt="img"
                  />
                  <strong>{currentStory?.by?.fullname}</strong>
                </div>
                <span className="threeDots">
                  <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </span>
              </div>
              <Divider />
              <div className="comments-scroll">
                <div className="second-row">
                  <Avatar
                    sx={{
                      width: "28px",
                      height: "28px",
                      marginRight: "18px",
                      alignSelf: "center",
                    }}
                    src={currentStory.by.userImg}
                  />
                  <strong>{currentStory.by.fullname}</strong>
                  <span className="description-text"> {currentStory.txt}</span>
                </div>
                <div className="story-comments">
                  {currentStory?.comments?.length
                    ? currentStory?.comments?.map((comment) => (
                        <div key={comment._id}>
                          <div className="comment-row">
                            <div className="left-comment-section">
                              <Avatar
                                src={comment?.by?.imgUrl}
                                alt="img"
                                sx={{
                                  marginRight: "18px",
                                  width: "32px",
                                  height: "32px",
                                  alignSelf: "center",
                                }}
                              />
                              <span>
                                <strong>{comment?.by?.fullname}</strong>
                              </span>
                              <span className="comment-text">
                                {comment?.txt}
                              </span>
                            </div>
                            <div className="heart-container">
                              {!comment.likedBy.length ? (
                                <img
                                  src={heartBlack}
                                  alt="imgHeart"
                                  onClick={() => likeComment(comment)}
                                />
                              ) : (
                                comment?.likedBy?.map((like) =>
                                  like?._id === user._id ? (
                                    <img
                                      key={like._id}
                                      src={heartRed}
                                      alt="imgHeartFilled"
                                      onClick={() => dislikeComment(comment)}
                                    />
                                  ) : (
                                    <img
                                      key={like._id}
                                      src={heartBlack}
                                      alt="imgHeart"
                                      onClick={() => likeComment(comment)}
                                    />
                                  )
                                )
                              )}
                            </div>
                          </div>
                          <div className="comment-bottom">
                            <span>
                              {utilService.msToTime(comment?.timestamp)}
                            </span>
                            <span>{comment.likedBy.length} likes</span>
                            <span>Replay</span>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
            <div className="footer">
              <Divider />
              <div className="crudle-row">
                <HeartSignContainer story={currentStory} />
              </div>
              <div className="story-timestamp">
                <div>{currentStory.likedBy.length} likes</div>
                <div>{utilService.msToTime(currentStory?.timestamp)}</div>
              </div>
              <Divider />
              <div className="smiley-row">
                <div className="left-section-input">
                  <img
                    src={smileyBlack}
                    alt="smiley"
                    onClick={openEmojiPicker}
                  />
                  <input
                    className="add-comment-input"
                    placeholder="Add a comment..."
                    onChange={(e) => handleChange(e)}
                    value={text}
                  />
                </div>
                <button
                  className="post-btn"
                  onClick={addNewComment}
                  disabled={!text.length}>
                  Post
                </button>
              </div>
              {showEmojiPicker ? (
                <div
                  style={{
                    position: "absolute",
                    bottom: "40px",
                    marginLeft: "80px",
                  }}>
                  <EmojiPicker
                    onEmojiClick={onEmojiClick}
                    disableAutoFocus={true}
                    native
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
