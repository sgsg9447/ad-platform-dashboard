import React from "react";
import AdItem from "./AdItem";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { adListState } from "../../store/atom";
import { useAdListModel } from "../../models/useAdListModel";
import { AdListDataType } from "../../models/types";

export interface IProps {
  props: { id: number; budget: number };
}

const AdList = () => {
  const [adList, setAdList] = useRecoilState<AdListDataType[]>(adListState);
  const { getAdList } = useAdListModel();
  React.useEffect(() => {
    getAdList(); //TODO : bug 발생!!!!
    // adListRequest.get_ad("").then((response) => {
    //   setAdList(response.data);
    // });
  }, []);

  return (
    <AdListContainer>
      {adList.map((aditem: AdListDataType) => (
        <AdItem key={aditem.id} aditem={aditem} />
      ))}
    </AdListContainer>
  );
};

export default AdList;

const AdListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;