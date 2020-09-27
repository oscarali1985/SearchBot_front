import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ResumenInformacion = () => {
	return (
		<div className="container">
			<div className="row  justify-content-center">
				<h1>{`Verifica tu informción personal`}</h1>
				<p>{`En el futuro no podras cambiar tus datos a menos que hagas una solicitud al equipo técnico`}</p>
			</div>
			<div className="row  justify-content-center">
				<div className="col-auto">
					<div className="text-center rounded-top" style={{ background: "#03989E" }}>
						<h1 style={{ color: "#ffffff" }}>
							<i className="fas fa-user-circle  mx-2 my-2" style={{ color: "#ffffff" }} />
							{`Información Personal`}
						</h1>
					</div>
					<div className="text-center rounded-top mx-2" style={{ background: "#c4c4c4" }}>
						<p style={{ color: "#ffffff" }}>{`nombre`}</p>
						<p style={{ color: "#ffffff" }}>{`apellido`}</p>
						<p style={{ color: "#ffffff" }}>{`numero de telefono`}</p>
						<p style={{ color: "#ffffff" }}>{`nombre de usuario`}</p>
						<p style={{ color: "#ffffff" }}>{`correo electrónico`}</p>
						<p style={{ color: "#ffffff" }}>{`fecha de nacimiento`}</p>
					</div>
				</div>
			</div>
			<div className="row justify-content-center d-flex">
				<Link
					type="submit"
					className="btn btn-primary my-3"
					to="/finalizar"
					style={{ background: "#03989E", border: "none" }}>
					{"Continuar"}
				</Link>
				<Link
					type="submit"
					className="btn btn-primary my-3"
					to="/registrate"
					style={{ background: "#03989E", border: "none" }}>
					{"Volver al formulario"}
				</Link>
			</div>
		</div>
	);
};