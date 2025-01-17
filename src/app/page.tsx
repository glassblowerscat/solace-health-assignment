"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Advocate } from "../db/seed/advocates";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredAdvocates = !searchTerm
    ? advocates
    : advocates.filter((advocate) => {
        const {
          firstName,
          lastName,
          city,
          degree,
          specialties,
          yearsOfExperience,
          phoneNumber,
        } = advocate;
        const fields = [
          firstName,
          lastName,
          city,
          degree,
          specialties.join(","),
          String(yearsOfExperience),
          String(phoneNumber),
        ].map((field) => field.trim().toLocaleLowerCase());
        return fields.some((field) =>
          field.includes(searchTerm.trim().toLocaleLowerCase())
        );
      });

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  }

  function handleResetClick() {
    setSearchTerm("");
  }

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input
          style={{ border: "1px solid black" }}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleResetClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => {
            const {
              id,
              firstName,
              lastName,
              city,
              degree,
              specialties,
              yearsOfExperience,
              phoneNumber,
            } = advocate;
            return (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{city}</td>
                <td>{degree}</td>
                <td>
                  {specialties.map((s, i) => (
                    <div key={i}>{s}</div>
                  ))}
                </td>
                <td>{yearsOfExperience}</td>
                <td>{phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
