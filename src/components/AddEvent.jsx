import React, { useState } from "react";
import {useNavigate, useParams, NavLink } from "react-router-dom";
import axios from "axios";

const AddEvent = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [initial, final] = useState({
        EventName: "",
        Discreption: "",
        Place: "",
        EDate: "",
        Time: "",
        HostName: "",
        Email: "",
        Password: "",
    })
    const EventData = (e)=>{
        const {name,value} = e.target;
        final((Edata)=>{
             return{
                ...Edata,
                [name]:value
             }
        })
    } 
    const EventSave = async (event)=>{
        event.preventDefault();
        const {  EventName, Discreption,Place, Email,EDate,Password,Time,HostName} = initial;
        try {
            const response = await axios.post("http://127.0.0.1:4000/uplodeData",{
                EventName, Discreption,Place, Email,EDate,Password,Time,HostName
             })
             navigate(`/PersonalPage/${id}`)
             console.log(response)
        } catch (error) {
            console.log(error);
        } 
    }

    return (

        <>
        <div className="flex w-full justify-between h-[90vh]">
    <div className="h-full p-3 space-y-2 dark:bg-gray-900 w-1/6">
	<div className="flex items-center p-2 space-x-4">
		<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESEhgSEhISEhESEhgSERIUERgZEhESGRgaGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzYsJCs0NDQ2NDQxNDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEMQAAIBAgQDBQUFBgQFBQEAAAECAAMRBBIhMQVBUQYTImFxMoGRobFCUnKCwQcUI5LR8CRDYuEzNXOywjSEorPxJf/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAqEQACAgIBAwQCAgIDAAAAAAAAAQIRAyExBBJBIjJRcQWBM2Gh0RMUFf/aAAwDAQACEQMRAD8A8yiAiEcTSUCAj2jxwJCDAQgI4Ee0gBrRwIQEQEhBWitHtHtCCxrRWl1OG1WAZUuCAfbUWvqAbka2IPvky8Grcwi+Rcf+NxEc4rloZQk+EzNtFaaL8Kcbsnvzj/xko4NUy5i9MX2GYn4m0iyw+QvFP4Mm0VpovwmsD7Kt5hxb52PykFTA1V3pt7rN/wBt5FOD4YHCS5TKto1pIVjWjiEdorQ7RWkoNgERrQ7RrSEsjIjWkhEYiAJHaDaSERiJCEZjQyIJEgRrRocUBBhCjCEBCAQEICICEBIQQEcCICOBIAQEcCOBCAhATYOkjN4yVQEXIF9Tew8hoddZo1sBTJDXstvsEZSORvaZzuKdMMfttf8AKMw+uaM9YAXV/C2qkbEfoesz5XLu0zTiUe31IkHEWw9UrrkIFteVgP7O2pvytvYPiCVBdSBp7veOQ8xcTiMbiix1A02I0I+clweKKnMhsy6kL9oc2UcmHMc5nnDu35NEJ1rwdtUrgHKws29m0zDqCNGHpGXIeVgeRAyn9D9ZQwfEErIEqAMDqBfnyZD9lvLb02IjFdw2VialNj4W2a/Q9GHzt6iU9rLu5Gp3YykDb7t9j5E6qfhIqL2uCW0NvFa6+RP9fjAbFAjNTa+nlmX1GxHylOtilqgi/d1l0DD6EfaXfQ+drGBILL+IwtN9XUHz1B9L7j0lKvwum1yhKHpuvz1Er8L4owZqFUagXUXvpzAPMdPUdDNpbHY35qeo6R1OcOGI4QlyjmKmFdb3RrD7QUlbdc20htOqqplHUE6dCD+m8wuIYUU2FvZZbgHkeY+nxmzDm73T5MWbB2LuXBRIjWhkRrTSZgLQSJIRGIgCARBIhkRiIAkZEEyQiCRIEGKK0UhBxHAiAhASEHAjgRAQgIQCAhARAQgIQCAkuGoh3VC6oGNi7eyo5kwAJc4XhUqVFWobUwC9TfVFFyotrdrZfLNeQAPGmomnTSncIFZM7c6iMTdhyDZ28hp6zKThbkeE5QdfEwCX95v8pPx7Es9SpUyAU6jlxlAyq3PQDw/31mGK7DQNp0PL06TNN70aoKuTXbhBt4sQg9xI+JMq1eFVUGdGSoo1ujXYeeXeVKb1D7OY+l/rLKUsQ2oVieo3+I1lW1yy6k+ENQxB9pd93TkepHQzSp40OpV/Ep0N/aFtr+lt99PdK1PgOMqG60KhY8wN/jNGh2O4m1iuFbN1zoPjdojcfksjGXwZ/fvTaxYlT7LdfI+f1lyrXFQX0DjZuvkfLb5ETbpfs84lUSzJSp35PWFwfyhpewn7MccR/ErYZNti7m3PTKPrEco82Mk+Di62KuUfZ1JU9bWJ+o+s1KHE7DfY3H1/UidBi/2WYpdaVehUAZiFYMhsdtQGF5jY3sRxKkLnDlxfU0nV/Tw3zfLlI3F+SJSRp4TECpTF+Vz7rkD+/KV+JUO9pirTue7BFRSdcubR0HNdbHpodrkZvDlaxRiQ2zg/YA+weh3uPPzmpguIoKyogDi+RwbZcp0YMToNCRbeNjfbK0JkXdCmYZEYiXeK4LuKz0gbqjeA3BzU2AZDcdVKyoROlyczgjIgkSUiCRIQjIgkSQiCRIEAiCRDIjEQBI4odo0ARhDEYQhIAQEMCMBCAjAHAhARAQgIQCAmx2ewr1HenTbI70wpqfcplhnI89APQnlcjIAnR9kaDOa4DKl6ITvCLlWc6ZFuMzWV7dLX6QPgkeTnO0TIKzCic1NFWntq2QZc3ne397Sz2d7NiqoqMvtG4uPZXlaZ3F8HSp1u7pszWITMWLMzE7kiwF76aD9Z63wvAinSQWscomKdps6GNJ0ZmA7L0VsWUMfOdBhuF0l2RR7pLTk6/it6Cc+cm2boqiajQQbAS2iiVUA6k+p/pLKERERk4hCRC3n8Y+XzPyjCMkgtGF+vyjMZGRHEftF4QKlH94Rf4lMgVMrBDUpnSzN5Eg+l559gKlTOEVFpLY+IWYCw0GjDc2GpFr3ns3FqAqUqlM7VEZD+ZSP1njPA8OrVHd0dWpgMO7chM19mA5fCaMD7tMryqto0eNVahp06dZEDpmKVEA8dI6WLKxvZg2nLXrMYibXHMLUppTLs7o5dkZ9ai3KFkZ7XcC+YE62e2trzIInVgvSjk5H6mRERiJIRAIjCAEQSJIRBIgGIyIJEkIgEQBBtFCikDYwjgRhCEgGOBDAjAQxCAcCOIhCAjCiAm7wEuKWIIqd2mWmDfZ6l3yDcW0z63GpXymKBNnguLSlTquygspTujoWWo2ZfADpmsB4jsM3WCXA0eTMThGXiGGpOweo9ZWdQPCuuYgddj4vfPW+IsEAE4DsqBiuKUailSlOnVqsVvZqgAViS2pOZwbnUixsBYze7dcfXClUCl6rglUvYAD7THkPrMU1p0b8bqrNFsYiLmdlRRuzEAD3mY2N7bYanpTzVWHTwp6Zjr8BPPMZxKrXbNWrW6Ko8Keg2kdGnQPtVGPu/pMiw+WaXlvg7LDftCrNWRO5pim1RVYXYvYkAkG9rjfaelUqt55VwFMIjgoELg6Fjdh6XnouArZhKslJ0lRbBOrbszO2XamrgjTWnTRjUzFncMVFrAKACNTfrMrCftKP+Zh1t95KhGn4WB+s63H0KdSmVqKjJa5DgZQOuu0844rheEq5yVbH7tJmZPcR4fnDBpqqBJVuzvOG9tMHWsDUNJz9mqMo/nBK/ObwrBgCCCCLgg3BHkec8O/wHKpWt6Lb6y3wziBoNfC40oL603UmmfVRp77XjSxt8CqS+T1+u08hTCF8VXoowSolViqMdGXOdQbE21Go66z0Ds9xw4q9OoqrVUXujZqbr95DuOXhax9Zy3G8NTp46sKjd2LLXR1XMyXTKbLzuQbga8+UbBFxlTFzO46M7i1SqFSjVprTZCz2W9nUgBWvezeydRvf3DKImvxfELUp0rPnZFdM9756fhZDc67s++t7jlMkideHtRx8nudgEQSJIRBIjCkRjEQyIJEBCMiCZIRAMAyAihRSBBEIRhDEhAlEcRCEIRWOIYEFRDEIAgJZweDeu3cpvUI16Ab/Iked7XF7i1VenQGTu1qOLd47gNZ+aKp0AXa+5IPkA+A4ilCstbJoA2iH2gVI2Pr8pQ88G3E1LpckUpfuig/E8TgsQ+Dwjqjllwq1Aih/EwY5TrYszasbmwFrWg8T4QtOoQ9SpXqf5lR2JLtzPW3qSZV4ZWNXF08XVDCo+OUMLfw7WzAeoIA9BNbiVTNULeczzetGnFG3sojBIozHJTUbs1lX48zBGFoPouJoljsGBUMegJGs0aeSnR/eGVXru2ShnUMlFSCbqp0zZVJv1sNpzLY5HxFsQa1RAxDlX8THayg6KLytQb5ZY8qT0tFzEYUo2UrkqDVSux6baEHrOu4B2yw1Omq12qB8uuVCwNtL3nIIH7tfaKB2RM1sy2AOU25EEe9TysJf7OcB/e3baysQCVB+sSUVXq8Dxdu46s3O03aGnjzSwmHZxTeoGrMVykgagWO9hmb1VZYThVFNKVNECi7O9rgdWdtZz/D8D3WP7sgAgOosLXZQdbek2uONlpkkBrOtOmjKCneFS7VHU6PlWwVTpmYkg2EqcbajF0uR4vsTlJW7omXEYYD/1lIgbkLUZB+dVKy9SwtOogYd1XpnQOpV0J6X118jrOQ4D2vbD4lu8qYt0yuiquIbKap0U5CcuUG+hFvLlO2wGXGYVsdRppTx9ElMSlJctPGhFDlWXbMyMCrbq2lyI0sFLT2LHqLe1ozeI9m0NNqmFzUK6DPTyMQrlRfLl2UnkRbW2+0xuA8QrY3EAV3DvToFkdlGZlV1AVyPa0qNr8bztkx1PwkG4axU9QdR8p5otZcNQo4igGFXvXV2zEipSv4Vttbw/PqBD002/cDqIeY/Btcewop1AijKpTOBe4BYkHL5HLm/NMoz0Wjw7DimuIxNPPUyDwP4gtySECbE3PnrM7EGjiD3dTCU6KtolRAoemeROUC4/06iav+7jT7d18mT/AM/LJOevo4kiMRJa1NkZkb2kYo34lNj9JGZuOeRkQCJIRAMgUAYBEMwTAwoCKPFAEFZIsEQlkIEIYgrCEYDDEnwyg1EB2LqD6XF5CIakjUbjUesjAizjjd2Y7liT8ZXDh1K2sR4gfqPh9Jb4gl3JHsv41/C3iHyMr8PAFQZhsGIB2LBSQPjaclWnR6KdSVr4NT9wB4O2IQXehjziBbcqmVG9wBY/ljLhO8XOmuYZkPI8xOl7PkLwyzWZXrViwI0Ks3s26W0nMYSrUwTFVR8Rhbkpk1rUQT7JU6svn9I+TcdGTDpuyMJTqJ3efu3VgypUU5VYAgjMNbWJG3xlWp2aRm7wPQuTmt3r5b9bZN50Cca4VVNndVYbrVpsrL6krb5xVeKcJpi4q0yeQRWZifKwMp78i8f4L3DC92YGPw4oYdVJRitRqrFScuYqERQSBpb5mdX+zzCFKYLDVvEffrb4TmBmx9ZSKbU8OjXVWsHqvyL8gPL63npnAsGtJAMwLcyNrwZG2qfJIRSba48HI9t8G2HxKYtFuFYVGA+0F0qL711/KZa4zw3vkV6dSnkcpWpOxYIxyZbEqpsCp+PpOt43w9a9IpcBx4kJ5ONpwnBeJVsEXo9y9fDhiTQWxr4ZifEEU+2hOthqPma4t+OUPJKra15/2ZzdjQX7wVMMGvmP8Z8ub72Xu97zrOzzpg6JpK4q1alQ1HKA5QbKoAvyCqOXWQVO03Bh/wAT+G3NXwlVWv5gIRArdr8Ei/4ajXrdBSw7Iv5mYCw84zeZ6aESwrgxu0lc0QXFlCL4QNgbWUD5fCT8X4P3HBKeZLVKYSowO6s73YH0z290k4dwqtj6y4nFqtOhTYNSwytmLONmqNsR5c9rDW/Y8bwi18G9MmwbLclQ1srq2oOh22MaNRVftkknJ3+kc5jeJOBTCU84FNWYk6KxFrac9/jL6jvEV7WJF7dDL5w61AWsNTbQbkQhQCgLyA1+syPbNndFRXyedcfW2KqfjB95VSfmTMwy5xCt3lV6g2eoxX8N/D8rSqZ6PGmoJP4R5fI05tr5YBgMJIYBjCkRgmGYJgCgYoooAgiGIAhiQgSwxBENYwoawhBWGsKAy2lTMgU+0ns/6l3t6gk+70le4BvbURhHamD1mbJ0/c+6Jsw9Z2xUZePJ1ODrf/zRblVcH10P6zllzM2jEe+b3BSDhatLW6uKoudwyhW+GRf5pzbOUqEecz5YuKpmvDkUvUjRAr20csOja/WVM7F8lS6nmLWuPdNbAVwbQ+N01qKrDR0Fgeo6GZE90anxZl4/GlAq0zly66dYsL2nxNPTMT6zOem5NiAfME/S0tYDCAsC1NnA3VGW/wA5Y4JorjkcWdDw/j2PxLBaa3udWIOUeZM1+0HByQKgb+KqjMwFsx5mDgOMLQQKmCrAdQya/OXWxmJriy4N6an7VeoEFvIAFj8JRKDjui9ZO7g5JOK4kHJ3rAjSxMlFCpVIL1GYdCdJuv2YQ3qO+apyyDKijpa5J9SfcJF+793p0gcl4Gjtmjw9xTQKOU062IAwzsxsPCPi4H6zm+/tF2gxVsGlO/iqVAbf6E1J/mKRsGNzk4ryV9ROOOPczaoY4KoUHQbTF7QcdAptSptd3GV2B9hTvr1M5XvXtbO1umYyKbsPQdsu6TuvBzc35BSi4wVX5YJgGGYJnROagDBaEYJijIjaAZIZGZBkNFHigCRiSCRiSCAgQhrAENYwpIsJYKwhCgMKGIEMRhC3gMSadQNuCCrj7yHcfQ+oEqcaoZXzDVTqpGxB2Mmw9JqjBEUs7GyqNyZX4nxGhSJoOzOytZnUeCm3PLfVxffbyvzoz4+5WaOmyuMu3wQ4LFW0mp32YTnK3h8SkMp1VlNww8jLOFxnImc2cKOrHImapo3l7C4iqmxDDo6hh85Uw9UGaNAiUyZfE2MFxWuNBkT8KAGalHEMdWJJ85iUXAlj96A5yllhr1MRpMXG1xKuL4oqjec3juMA38Q8yToPUwwhKTFc4x2zZFfM1r6bk8gBzMpcSxZqvfXIoyIP9I5+pNz8Okq8KrDEU3NIsxp61ARYsm+ZeoFjcb6X9GM7PS4FCPc+WcbrepeSXauEDGMcxprMKAMFoRgtAMgDBMIwTFGQDSMyQyMyBFFFFAMRiGJGJIsBA1hiAsIRhSRYQgrCEiAwxCEETW7P8JOKq5TpSp2eu/RL+yP9TWIHvPKMIzb4NghhsP8AvD/8asn8MH/LpMNGH+puvIW6meace4dU792VWZWYvca2J1I+PytPTO0OKzubaKNABsByAnIY4Xv57ySgnHY+KTi7OOo13p3A2v4lYaX8xyPnLVGqHNl0c7KToT0U9fI/OQcQVg3i1+63Uf3ylKYpJcG6MnydBh+ItTNnBFus2cNxhCPa+cg4rhQ1OlUI8VSgjuerFASfedffMJ8KJnlBPk0xnLwdceN0wPaHxlHE9owdEux8v6zmzh5L3BFJ3+6AB+ZgD8iYscUbGlkkkPi+LOx39wP1P9Jn5nqEKLsSdFA5yIAnQb9J2fBOGiigZx/EOtvu/wC80QguEZZzfLNPsnh2wqg38ZOZiOvIe6X+0HD1p5a1MWpVd1G1OpuVHQEaj0I5SCgxvedFg0SvSfD1DlFQDK1vYqDVW9x38iRNkNKjFkV7OJMYybFYd6btTqDK9NirDzHQ8xzB5gyAmWFKGMExzBMDGQJgmEYBijAGAYbQDIEUUaKAYjENYAhrAQNYQgCGIwGSCEJGJIDIAMTp+z3FadLDPTuBUaqXPVkyKB8CG+PnOe4fg6leotKkuZ29yqBuzHko5mdrVwmHwlBqFO1R6gtWqsPE56AfZQHZfjcxlyJIwcRjKdQ2zC/rMzGUGAva4mbxXCMrEoTbpM1OKVqegZrdL3HwMEp1plkYXwW8Xhg6lT7jzU9ZU/dKeUAixU+Ic3HPXkfOWqXGEc2qKAfvKLH3jnJ8ThQ4zKQfusNj5TLkV7RqxSp1IPF4/vFA2ygALyUAWAHlM+4MdKBPkeh3k9LAesxyzR8m+GGXgrd2TtL2H4fmUq2oYWIl/D4MD+/X/aWajKgsPaI36DrKf+ZzkowWy54Ywi5TekUMHw6nSAvZmU5gxA0by6WmjSQtqdBKlbEpTXM50Gw6zKbiWIrm1FDl+9so986UF2quWcmbc5XwjpWxVNOYj4bjlNXHjFxyB1mRg+Ck+Ks5c/cBIQevMzpeF1RQIyKqgclUCWxsqlVGfx3GrXq94vOmik/eIG/wsPdMwztOJcHp4xTUw4VMSNWQWCV+thsr+ex59ZxbAgkEEEEggixBGhBB2MtTM9AkwSY5MEyMIxgGEYBgGBMExzGMAw0Ua8UhCJYYgCEIAkohLI1MMGFCsMGS0kZmCKCzOwVVG7MxsAPUkSETpex2FGd8W/sYdbJfY1nBCnzyrmPqVMKFbo36FKlw+gUQhsRUA797g6jdE6IDf1OvS3M4viJYnWV+J48sx10uZlmtePajpEjG9svO+beZ2JwCttJ0eTI0rlstiqOdxHD2W5tcSfCV3osqvrTqKGHl/d5tYhboepFh6nQSjxTBZ1ULvSWy+egv9BKmh1LwadKgGPXnLdLBiUOC1cyLfexU/X+s3UnF6tOORpedne6KSliV+NAJQUa225zCfFZs1Q3y7gDcj7IH985s8Rq5aLnmEa3raY+GQWQcgMx/SXfj4W3J/RR+SlSUF9lbDcPFbLUq3YtchPsoAbWtzM26NNVFlAA6CUsC/hI5o7of5iR8iJeBnVSo47dkoMfPIi8id4wDSweOamwINtZodoMDTxVI4unpiEUNWQWtVRQcz2++ALnqB1nLtV1mvwbiBSoh5A6g7EcwZExZRObJjGanaPh64fEMqf8ACcCrR8qb3sv5SGX8vnMomPZWMTAMcwSZAoExjHMEwDDRRooCEYhCCI4gCSCGDIhDBhAGDOxxP+FwVOjs7r3tTrnexsfMLlX8s5vguFFbEU6Z9lnu/wD01Bd//irTQ7VY81KrepjrWxJK2kYOIq3OsrI8eqZVWprKu7Zco6NJHlhHmajyzTeRslFzPdlX1Y+7/ciS0jp66yjRe9Q+VP6n/aWKT6D0gsIXDhkdgNhU09D/APs21eYdA+Nvxr9FmsrTldevWvo7H45+hr+yDjVT+ER95lX4kSum/oAIPGX0QdaixkOp9Zf0Eag3/Zn/ACEryJf0R4dstd15Oq1B6jwt+k0M8y2b/EJ5o4/X9JbV9Jus59bLBeQVHgM8gd4GyJBB9ZbovbaZivc/3rLyGwkTC0b3Fl7/AAK1Bq+Fex6mlUIU/BsnxacqTOo7O1FdmoObU6yNTbyDgrf1F7+6cvURlYqws6kqw6MDYj4iWplMlTBJgGOTGMgBjBMcmCYBhRRrxSEIxHBgAwgYBgxCBgAwgYQHSdkkymvWP+XR7tfx1G0P8qOPfMTHvmcnznQYH+Fw7Nzr1XcfgS1MfMP8Zzbm5hlqIsVcmynVOkohtZo1hpMmu1iZQzQjStJEMEwljtCIlwjfxG/CP1lmkdB6SglNs9wSBztzEvU4CEtA+JvxL9BNNTMvD+0fxD6CaSmczrvcvo6/4/2P7M7jDap/1BD5mQ8aPsHo4MlJ19wmjo/YZ+v/AJP0V6pArISbAK2/pLCNpI6+GSoQWF7bSVV00Gg6cprMALGROND6SUwKw8D23yNbzNjBIZFPDPrNFGmPgmzC/Wa1KSJHyXsBVyVFboYu1FLLinYezVC1l8863c/zh5XVrGaHaFe8oUKw+znoOef30HzqSyLK5HPmMYiYJMYURMExEwSYAiijXjyEIhCEaKAYMR4opBWdZj/+X4b/AKbf97zlzFFGnwgY+WRVtpj4rcx4pQy9Gq28dIopYxCanJliiikDw2/55prFFOZ1vvX0dfoPY/syuObL+ISUb+6KKX9H7DP1/wDIiSFQ3iimwwEmL5esrL+h+kUUEhkY3DfZHoJsU4opESRKJp47/l3/ALtP/rqxRR4lcjnDBMUUcUEwTHigCNFFFIQ//9k=" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">Dashboard</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Owners EventX</a>
			</span>
		</div>
	</div>
	<div className="divide-y dark:divide-gray-700">
		<ul className="pt-2 pb-4 space-y-1 text-sm">
			<li className="dark:text-gray-50">
				<a rel="noopener noreferrer" href="#" className="bg-gray-800 flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
					</svg>
					<a href="#" class=""><NavLink to='/AddEvent/id'>Event Requests</NavLink></a>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
					</svg>
          <NavLink to="/new-club-register">
                    New Club Register
                  </NavLink>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
						<path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
					</svg>
					<span>Add an event</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
						<path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
						<path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
					</svg>
					<span>Clubs and socities</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
					</svg>
					<span>Approve an event</span>
				</a>
			</li>
      <li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
					</svg>
          <NavLink to="/students-data-record">Students Data Record</NavLink>
				</a>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
						<path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
					</svg>
					<span>Settings</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
						<rect width="32" height="64" x="256" y="232"></rect>
					</svg>
					<span>Logout</span>
				</a>
			</li>
		</ul>
	</div>
</div>
<div className="w-5/6 flex justify-center items-center">
    
<form
        className="px-16 py-16 event-form text-white"
        // onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text" // Change the input type to "date"
            name="eventname"
            // value={eventData.eventname}
            // onChange={postEventData}
            id="floating_date"
            className="block py-2.5 px-0 w-full text-sm event-input bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="floating_date"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name of the event
          </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="eventdesc"
            // value={eventData.eventdesc}
            // onChange={postEventData}
            // id="floating_password"
            class=" event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Description
          </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="eventvenue"
            // value={eventData.eventvenue}
            // onChange={postEventData}
            id="floating_repeat_password"
            class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Venue
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="eventdate"
            //   value={eventData.eventdate}
            //   onChange={postEventData}
              id="floating_first_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="time"
              name="eventtime"
            //   value={eventData.eventtime}
            //   onChange={postEventData}
              id="floating_last_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="eventeligibility"
            //   value={eventData.eventeligibility}
            //   onChange={postEventData}
              id="floating_first_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Eligibility
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="eventprizes"
            //   value={eventData.eventprizes}
            //   onChange={postEventData}
              id="floating_last_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prizes & Rewards
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="eventhost"
            //   value={eventData.eventhost}
            //   onChange={postEventData}
              id="event-input floating_phone"
              class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 event-input focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Hosted By
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="file"
              name="eventbanner"
            //   value={eventData.eventbanner}
              accept="image/*"
            //   onChange={postEventData}
              id="floating_company"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event Banner (Landscape)
            </label>
          </div>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
        
      </form>
      <div className="px-12 flex g-4">
       {/* {renderTask} */}
      </div>
</div>

       </div>
       
      
            {/* <form onSubmit={EventSave} method="POST" style={{ color: 'black', display: 'flex', flexDirection: 'column' }} >
                <input type="text" placeholder="Event Name" name="EventName" onChange={EventData} />
                <input type="text" placeholder="Event Detail" name="Discreption" onChange={EventData} />
                <input type="text" placeholder="Vanue" name="Place" onChange={EventData} />
                <input type="date" placeholder="Date" name="EDate" onChange={EventData} />
                <input type="time" placeholder="Time" name="Time" onChange={EventData} />
                <input type="text" placeholder="HostName" name="HostName" onChange={EventData} />
                <input type="email" placeholder="Email" name="Email" onChange={EventData} />
                <input type="password" placeholder="Conform Password *" name="Password" onChange={EventData} />
                <input type="submit" value={"Save"} style={{ background: 'white', margin: '10px' }} />
            </form> */}
        </>
    )
}
export default AddEvent;