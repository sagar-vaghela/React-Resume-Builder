import React, { useContext } from "react";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf";
import styled from "styled-components";
import { ButtonWithIcon } from "./Button";
import { PageContext } from "../context/PageContext";
import ChangeColor from "./ChangeColor";
import ChangeFont from "./ChangeFont";
import ToggleTheme from "./ToggleTheme";
import Ruler from "../styles/Ruler";

const Wrapper = styled.div`
	background: white;
	padding: 0.5rem 1.5rem;
	width: 280px;
	z-index: 2;

	.button-list {
		display: flex;
		justify-content: space-between;
	}
`;

const Settings = ({ type = "unconstrained" }) => {
	const { pageRef, panZoomRef } = useContext(PageContext);

	const downloadResume = () =>
		new Promise(resolve => {
			// to prevent collision when exporting to pdf
			panZoomRef && panZoomRef.current.autoCenter(1);
			panZoomRef && panZoomRef.current.reset();

			setTimeout(() => {
				html2canvas(pageRef.current, {
					scale: 5,
					useCORS: true,
					allowTaint: true,
				}).then(canvas => {
					const image = canvas.toDataURL("image/jpeg", 80 / 100);
					const doc = new jsPDF({
						orientation: "portrait",
						unit: "px",
						format:
							type === "unconstrained" ? [canvas.width, canvas.height] : "a4"
					});

					const pageWidth = doc.internal.pageSize.getWidth();
					const pageHeight = doc.internal.pageSize.getHeight();

					const widthRatio = pageWidth / canvas.width;
					const heightRatio = pageHeight / canvas.height;
					const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

					const canvasWidth = canvas.width * ratio;
					const canvasHeight = canvas.height * ratio;

					let marginX = 0;
					let marginY = 0;

					if (type !== "unconstrained") {
						marginX = (pageWidth - canvasWidth) / 2;
						marginY = (pageHeight - canvasHeight) / 2;
					}

					doc.addImage(
						image,
						"JPEG",
						marginX,
						marginY,
						canvasWidth,
						canvasHeight,
						null,
						"SLOW"
					);
					doc.save(`RxResume_${Date.now()}.pdf`);
					resolve();
				});
			}, 250);
		});

	return (
		<Wrapper>
			<div className="button-list">
				<ButtonWithIcon
					text="Download"
					onClick={downloadResume}
					className="fas fa-arrow-circle-down"
				/>

				<ToggleTheme />
			</div>

			<ChangeColor text="Change Primary Color" />

			<Ruler small/>

			<ChangeColor text="Change Secondary Color" secondary={true} />

			<Ruler small/>

			<ChangeFont />
		</Wrapper>
	);
};

export default Settings;
