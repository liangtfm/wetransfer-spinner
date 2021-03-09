import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ActiveButton, CancelButton } from "../Button";
import Card, { CardBody, CardFooter } from "../Card";
import Spinner from "../Spinner";

const MainText = styled.div`
  font-size: 18px;
  text-align: center;
  width: 100%;
`;

const TransferText = styled.div`
  font-size: 18px;
  padding-bottom: 50px;
  text-align: center;
  width: 100%;
`;

let progressInterval;

export function UploadCard(props) {
  const { progress, startUpload, cancelUpload } = props;
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      clearInterval(progressInterval);
    }
  });

  const onClickTransfer = () => {
    setUploading(true);
    progressInterval = setInterval(() => {
      startUpload();
    }, 1000);
  };

  const onClickCancel = () => {
    setUploading(false);
    cancelUpload();
    clearInterval(progressInterval);
  };

  let footerButton = (
    <ActiveButton type="button" role="button" onClick={onClickTransfer}>
      Transfer
    </ActiveButton>
  );

  if (uploading) {
    footerButton = (
      <CancelButton type="button" role="button" onClick={onClickCancel}>
        {progress === 100 ? "Done" : "Cancel"}
      </CancelButton>
    );
  }

  return (
    <Card {...props}>
      <CardBody>
        {uploading ? (
          <>
            <Spinner progress={progress} color={props.spinnerColor} />
            <TransferText>
              {progress === 100 ? "Transfer Complete!" : "Transferring..."}
            </TransferText>
          </>
        ) : (
          <MainText>Add your files</MainText>
        )}
      </CardBody>
      <CardFooter>{footerButton}</CardFooter>
    </Card>
  );
}

const mapStateToProps = ({ progress }) => {
  return { progress };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startUpload: () => dispatch({ type: "START_UPLOAD" }),
    cancelUpload: () => dispatch({ type: "CANCEL_UPLOAD" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadCard);
