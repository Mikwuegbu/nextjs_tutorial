import { Router, useRouter } from "next/router";
import React from "react";

const UserId = () => {
	const router = useRouter();
	console.log(router.query);

	return <div>THis is the Id</div>;
};

export default UserId;
