import React from "react";
import "../DataTableDemo.css";


function Products() {
    return (
        <div className="table">
                <table>
                <thead>
                <tr>
                    <th>Service</th>
                    <th>Pris</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Utvändig tvätt</td>
                    <td>249kr</td>
                </tr>
                <tr>
                    <td>Invändig tvätt</td>
                    <td>299kr</td>
                </tr>
                <tr>
                    <td>Biltvätt in och ut</td>
                    <td>499kr</td>
                </tr>
                <tr>
                    <td>Premium paketet</td>
                    <td>1999kr</td>
                </tr>
                <tr>
                    <td>Helrekond(mindre fordon)</td>
                    <td>3500kr</td>
                </tr>
                <tr>
                    <td>Helrekond(större fordon)</td>
                    <td>4500kr</td>

                </tr>
                </tbody>
                </table>
        </div>
    );
}
export default Products;
