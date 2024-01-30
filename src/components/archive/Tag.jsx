import React, { useState } from "react";
import styled from "styled-components";

const Tag = ({tagList, setTagList}) => {
    const [tagItem, setTagItem] = useState("");

    // 엔터키 이벤트
    const handleKeyDown = (e) => {
        if(e.nativeEvent.isComposing) return; // 한글 두번 입력되는 문제로 isComposing이 false일때만 실행
        switch(e.code) {
            case 'Enter' :
                console.log("tagItem ::" ,tagItem);
                console.log("tagList ::" ,tagList);
                submitTagItem();
            break;
            default:
        }
    };

    // 태그 추가
    const submitTagItem = () => {
        let duplicateCheck = tagList.includes(tagItem);
        if(duplicateCheck) {
            setTagItem("");
            return;
        }
        let updatedTagList = [...tagList];
        updatedTagList.push(tagItem);
        setTagList(updatedTagList);
        setTagItem("");
    };

    // 태그 삭제
    const deleteTagItem = (e) => {
        const deleteTagItem = e.target.parentElement.firstChild.innerText;
        const filteredTagList = tagList.filter(
            (tagItem) => tagItem !== deleteTagItem
        );
        setTagList(filteredTagList);
    };

    return (
        <TagBox>
            {tagList.map((tagItem, index) => {
                return (
                    <TagItem key={index}>
                        <Text>{tagItem}</Text>
                        <Button onClick={deleteTagItem}> X </Button>
                    </TagItem>
                );
            })}

            <TagInput
                type="text"
                placeholder="태그를 추가해주세요"
                tabIndex={2}
                onChange={(e) => setTagItem(e.target.value)}
                value={tagItem}
                onKeyDown={ handleKeyDown }
            />
        </TagBox>
    );
};

const TagBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 50px;
    padding: 0 10px;
    border: 1px solid #dddddd !important;
    border-radius: 10px;
    margin-bottom : 16px;
`;

const TagItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    background-color: #6f777d;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
`;

const Text = styled.span`
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    background-color: white;
    border-radius: 50%;
    color: tomato;
`;

const TagInput = styled.input`
    display: inline-flex;
    min-width: 150px;
    background: transparent;
    border: none;
    outline: none;
    cursor: text;
    font-size: 15px;
    font-weight: bold;
`;

export default Tag;
