import React from "react";
import { Briefcase, Clock, MapPin, DollarSign, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

const JobCard = ({ job }) => {
  const navigate = useNavigate(); // <-- initialize navigate
const handleJobDetails = () => {
  if (!job || !job._id) return; // or job.id if that’s the field
  navigate(`/jobs/${job._id}`, { state: { job } });
};

  return (
    <div className="flex items-center w-4/6 justify-between p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
      {/* Left Section */}
      <div className="flex items-start gap-4">
        {job.logo && (
           <img
                src={job.logo || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBAgQFCAP/xABJEAABAwMABAkIBwYDCQEAAAABAAIDBAURBgchsRIxNkFRYXFzdBMiJjM0gZHBIyQyNaGywhRSU2Jy0UOSoiVCREVjZIKE8BX/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAwYC/8QAMxEAAgECAgkDBAICAgMAAAAAAAECAwQRMQUSITIzNHGBwUFR0RMiYbGRoVLwQuEUI1P/2gAMAwEAAhEDEQA/ALxQBAEAQBAEAQBAEAQGMhAdVfr1SWOkM9U7JPq4x9p56lvt7edeerE11asaUcWVHe7zVXmtNTVO2YIjiafNjHQB8101vbwoQ1Ydynq1ZVJYs7jVuc6Ux+Hk/So+lOX7rybbPjdvgtpc0W4QBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB119rza7TVV3k/KGFnCDM4ztW2hS+tVjT9zXUn9ODkUxc7jVXSsfVVspfI7mHE0dA6B/wDda6ulShRhq01gv2Us5ynLWeZxFsPJJ9W3KqPw8n6VX6U5fuvJJs+N2fgtxc2W4QBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB0OnHJa5d0N4Uux5mHU0XPCkUxldSUwygJRq1PpXH4eT9Kr9Kcv3Xkk2fG7PwW45waMniXNluA4HiQGUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQHQac8lbl3Q3hS7HmYdTRccKRTC6kpwgJRq05Vx+Hk/Sq/SnL915JFnxuz8Fr1vsc/du3LnYbyLaW6ystFdMprW5tJcS6ajBw1/G+L+43LoLvR6q/fT2S/ZV0Lp0/tlkWbTVMNVAyenkbJE8Za5p2Fc/KEoywa2lpF6yxR9htXkyZQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB0GnXJS5d18wpdjzMOpouOFIpbK6kqMBlDGBKdWfKuPw8n6VX6U5fuvJJs+N2+C2K32Ofu3blzsN5FpLdZQhJyetdl7FCdto9pDW2KfMDuHTuOZIHHzXdY6Co11aU7iP3Z+5tpVpUnsyLZsl6o7zS+Xo35xsex2xzD0ELmq9CpQlq1C3p1Y1FijsmnIWk2GUAQBAEAQBAEAQBAEAQBAEAQBAEAQHQadclLl3XzCl2PMw6mi44UuhSi6kqAhklWrM+lkfh5N7VX6U5fuvJvtON2fgtmu9in7t25c7DeRaS3WUETtXZexQgnKA5lquFTbq+KejlMT+EAccThniI51qrUoVYOMlsPdObjLYXtHtYCeMjK5AvEbIZCAIAgCAIAgCAIAgCAIAgCAIDUkg8yA4FNeaSrr56KmlEksDQ6Ut2huSRjPTsW2dCpCmpyWxmtVYSk4p5HA065JXLuhvC3WPMw6ni54cik11JUAlDJK9WXK2Pw8m9qr9Kcv3Xk32nF7PwW1XexT927cudhvItZbrKAyuy9EULCA3hP08XeN3rEt1hZnoGL1bewLjPUvkbIZCAIAgCAIAgCAIAgCAIAgCA49bWQUMD6irlZFCwZLnFeoQlOSjBYs8ykorFlaaUabVFy4dLbC+npTsc/ifJ/Yfir+00dGn91Ta/b2Kyvduf2wyORqq+8bh1Qs3leNL8OHVmbDfkSvTvkncu6G8KssNlzDqTbnhyKRXUlSEBLNWJ9LY/DSb2qv0py/deSRacVdH4LbrvYp+7duXOw3kWksmefSdq7L0RRDKA3gP08XeN3rEt1mYraj0HF6tvYFxjzLxZG6GQgCAIAgCAIAgCAIAgCAwUB0mkektFYYfpsy1DhmOBh2u7TzDrUq2tKlw9mxe5prV40liyqb3fa+91Hla2TzR6uJmxjB1dJ6yujoW1OgsILuVNSrKo/uOuyt5rJvqp+8bj3LN7lU6X4cer8E2x3pEr095I3PuvmFWWPMw6k244UikMrqSpGUBLdWB9Lo/DSb2qv0py/deSRa8VdH4LcrvYqju3blzsN5FnLJnnsnauy9EUYyhg3gP1iLvG7wsS3Weo5o9Cxerb2BcY8y7WRuhkIAgCAIAgCAIAgCAIAgMFAVRrPPpEzuG7yuh0VwH1Ku94iIjlWZDGUMk51T/AHlce5ZvcqnS/Dj1fgm2O9IlmnvJG5918wqyx5mHUmXHCkUfldSVIygJZqv5Xx+Gk/Sq/SnL9/kkWvFXT4LervYp+7duXOw3kWct1nno/aK7L0RRswgN4PaIu8bvCxLJmVmj0PF6tvYFxjzLtZG6GQgCAIAgCAIAgCAIAgCAw5AVNrRPpFH4du8rodFcB9SrvOIRDKsyIMoCdapfvK49yze5VOl+HHq/BNst+RLdPuSFz7r5hVljzMOpMuOFIo7K6gqjIO1ASzVafS9nhpP0qBpPl+68ki14i6PwW/XexVHdO3LnYbyLKWTPO+dp7V2KyRSMZWTBvTn6xD3jd4XmWTPUc0eiYvVN7AuNeZdLI3QyEB8ppo4tsrwxp53bB8VlJvIYn0BGONYBnKAIAgCAIAgCAIDBQFSa0j6Rx+HbvK6HRXAfUrLziEQyrMiDKAnWqT70uPcR/mcqnS/Dj1fgmWW/Il+n3JC5918wqyx5mHUmXHCl0KMyuoKozlASzVYfS9nhpP0qBpPl+68ki14i6fBcNd7FUd07cudhvIspZM86k7T2rsfRFK8xlZMG8B+ni/rbvCxLdZlZo9FxeqZ2BcY8y6WRuhkIDR7A4EOaCDswRnKLY8QRu50N0tJNXo+4ywjbLbpTlhHTGeNvYNnUptKpSrfZXWD/AMl59/2RZwqU3rUnivZ+Dk6O6S0N8YGxu8lVN+3TyfaHZ0rxc2dS3eL2r3PdG4hVWzM73I6VExN5lZAQBAEAQBAYKwCo9afKOPw7d5XRaK4L6lbeb5DsqzIgygJ5qiP+1Lj3Ef5nKp0vw49X4JllvyJfp/yPufdfMKsseZh1JdxwpFGLqCrCGSXarOWDPDSb2qBpPl+68m614nb4LhrvYqjunblzsN5FlLJnnMnzj2rsfRFMwhg3gP08X9bd4WJZMys0ejYvVM/pC415l0sjdAEAQBAVrp/ZHW6qZe7fwog548rwDjgv5nDtV5o64+pH6E9vtj7exW3dLUf1Ine6E6Ui9R/s1YQ2ujbnI2CVv7w6+kKJfWX0HrQ3Wb7a4+otV5olnCHSq4l4mUAQBAEAQGCgKh1qn0kj8O3eV0OiuC+pW3m+Q7KsyKYygJ9qgObpcu4j/M5VOl+HHq/BLs9+RMNYGzQ669z8wqyx5mHUl3HCl0KJyuoKwzlAS7VVywj8NJvaoGk+X7/JvteJ2+C46/2Ko7p25c7DeRYyyZ5xJ2nHSux9EUzMZQxgfSA/Txd43eFiWTMrNHo+H1TOwLjnmXSyN1gBAEAQHCu1A25W2po5MYmjLQTzHmPuO1bKVT6dRT9jxOOtFxZRlFVT0FXFUwEsnhdkDPOOY7l1s4RqQ1XkykTcJYr0LxtFwiulspq2IjgzMDsdB5x7jlcnWpSpVHD2LqE1OKl7nPWo2GMrAAKyDKAIDBQFQa1+Ukfh27yuh0VwX1K673yGZVmRBlYBPtT33pc+4j/M5VWl+HHq/BLs9+RMtYPI269z8wqyx5mHUl3HDl0KJyuoKwxlATDVUfTFnhpd7VA0ny/f5N9rxO3wXHX+xVHdO3Fc7DeRYyyZ5uJ2ntXY+iKdjKA3gP1iHvG7wsSyYWaPSUXq29gXHPMuVkbrACAIAgCw8gUFefNvVyaBgCtnAHR9I5djRf8A6oP8L9FFLel1JhoJpGy3WeWmqDkNqHGMdDSGnfk+9Vl9aSrVdaHsSretqQwZZp4lRFmdbV1+a+K20xzUyN8o8j/Cj4uEe07B0nsK2wpvUdR5ZdX7Hhz+7VWZ2IGMbcrUezKAIDBWAU9rYPpLH4du8rotFcF9Svu98heVZEXAIMCwNTv3nc+4j3uVTpfhx6vwSrRfdImesHkbde4+YVbY8zDqS6/Dl0KGXUFYEBMNVHLGPw0u9qgaT5fv8m+14nb4Llr/AGGo7p24rnYbyLCWTPNpO09q7H0RUGMoD6QH6xD3jd4WJZMLNHpOL1bewLjnmXCyN1gBAEAQHynnZBDJNKeCyNhe49AAyVmKcngjDeCbPPc07qiaWok+3M90hHW45P4ldjGOqkvwv0UbeLeByqGgqquJz4Gkta7gnHTgf3WqrWVOWDPUYaxd18usNntk9bPjgxjzW5+048Q+K5ehRlWqKC9S4qTUI6zOn0Cgmlt0l4rjwqy5yeWceiPiY0dWNvvUi/mvqKlDKOz5Zptk3HXlmyUqESQgCAwVgFOa2j6TR+HbvK6LRXAfUr7rfIVlWRGGUBYOps5ud07iPe5VOluHHq/BKtN6XbyTXWFs0Nuvc/MKtseZh1JVfhy6FC5XUFYMoCYaqOWMY/7WXe1QNJ8v3+TfbcQuav8AYajunbiudhvIsHkeaifOd2rsfRFQMoD6U5+sQ943eFiWTMrNHpWL1TewLjnmW6yN1gBAEAQEM1l3kUFl/Yo3fWKzzcdDB9o/JWOjKGvW13lH9kW6qasdX1ZUeV0XoVmBbOrW2MZoy2eZgJqZnSt4Q4m7Gj48HPvXPaUuH/5GEXkixtqf2Yv1I7rVur6u5xWeB3mwgF+P4juL4Db71M0VR1KbrP1/RqvJaz1EWfQwtp6OngjHBbHG1oA5sBUc3rSbLBLBYHJXkyEAQGCsAprW2caTx+GbvK6LRXAfUgXW+QrKsiMMoCwtTP3pdO4j/M5VOl+HHq/BKtM328k11h8jbr3PzCrbHmIdSTW4b6FCLqCtCAmOqfllH4WXe1V+k+X7/JvtuJ/Jc9f7DUd07cVz0N5E95Hmhx853aux9EVPuMoYN6c/WYe8bvCxLJmVmj0xD6pnYFxrzLdZG6AIAgOFdblT2qhlrKyQMijGTnnPMB0kr3SpyqyUIraeZyUFiyir7d571c5q2oJbw9jI8/YaOILq6FFUYKmionP6ksT5Wmglutyp6CnB4cz+CT+63nPuCzWqqlTc36CEdeSii/qSCOkpYqaEcGOJgY0NHEAuSk3OTlL1LdfYsCgrxX+Xv9bXPdwg6qdJn+UO2D4ABdZSp6tGMF7eCpk8ZuTPQMDg6KNw2gtBHwXJNYPAt0fVYMhAEBgrAKY1un0oj8M3eV0WiuC+pAut8hWVZEYZQyWHqYP+1bp4eP8AM5VOl9yPV+CTa70ibaxORd2P/R+YVbY8xDqSa3Dl0KCyuoK4ZQEy1T8s4/Cy72qv0ny/f5N1txP5Lor/AGGo7p24rnobyJ7yPMxO13auwKr1ZjKyD6Ux+sw943eFiWTHqj01D6pnYFxrzLZZG6AIDh3G4U1tpJaqtmbFDGNrnbl7p05VJKMNrPMpqKxZS2l2k9RpFWA+dHRRHMMW5x/m4+z456W0tI20cHvP1KytVdR/gj7nAZJwBzqYaS29WmjbrbR//pVsZbVVLR5NrhtjZ19ZXPaSulUl9OG6v2WNtR1VrMnPBCrMCTgea5WFkr4pB5zXOY4dYOCuzi8cGUzXoXdq+u4vGjdM5z8z030Ew5+E3iPvGD71zF/Q+lXfs9qLS3qa8ESdQzcEAQGDxLAKX1vcqI/DN3ldDorgvqQLrfIRlWZHGUBYmpb72unh4/zOVRpfcj1fgk2u8yb6xORd27j5hV1jzEOpJrcOXQoFdQVwRgmWqTlozwsu9qr9J8v3+Tfb8Quqv9hqe6duK56G8ic8jzIeN3aV2BVerMZWQfWjDn1kDGAucZG4aBk8YXmbSi8WZW1o9Nw+qb2BccWqNigOh0m0rt2j0P1mTylS4fR08Zy939h1lSbe0q3D+1bPc1VKsaa/JTukWkVfpBV+VrJMRtP0cDfsM/uetdFb21OgsIbX7ldUqyqPadRnBzzqSayfavND3V80d3ucRbSMIMETx60/vH+XeqnSF9qJ0qb2+pLt6Gt90i2cBUJPMoCgtOLebVpTcIcYjlkNRH1teST/AKuEPcuqsqv1KEX7bP4KqtHVmz6aFaSO0dunlXlzqOfDKhnZxO7Rk/Erxe2quKeC3lkeqFT6b/DLypKiKqhjnp5WyRSN4THNOQQuZaabTLJPFYo+6wZCAweJAUrrhPpTF4Zu8roNFcB9SFc7xB8qzIwygLG1Kfet17iP8zlUaW3I9X4JNtmycaxORd27j5hV1jzEOpJrcOXQoBdQVxlYBMdUnLRnhZd7VA0ny/f5N1vxC6rh7DUY/hO3Lno7yJzyKAteh+kF1fwqa2Sxxlx+kqfom/jtPuC6epeUKS+6S6FeqU5PYia2jVOwFr7zXufzmGnGB/mO1V1TS3/zj/Juja/5E9suj9qs0fBt1FFEQMcPGXH3naq2pXqVXjOWJJVOMckfe63OitUBnuFTHTx8xecFx6AOc9i8U6U6ktWCxEpxisZFbaR6zJ5w+nsMboWcX7RI3zv/ABbze9XNvouMfuqvH8fJDqXLeyBX800lRM+aoe6WV5y97zwnOPWSrZRUVgsiK3jtNC7G0/ErJgsDQbQSStdHcr3EY6XY6KmcMOk6C7oHUqm90go/ZSe31fwSqNvj908vYtlrWsaGtaGtAwABgBUWZPMoAgIVrI0aderWKukjzW0mS1o45Gc7fmFYaPufo1NWWT/3Ej3FLXWKzRTHPt/FdGV5I9EdMK3RyXyY4VRQOdl9OSPNPOWHmPVxHq41Du7OncLHHCXubadWVN/guKw6QWy+wiS31DXOx50Ttj2nrC56tbVKMsJosIVIzWMTt1pPZg8SxiCv9PNBa7SO6trqOqp4w2IM8nIDkntCs7K+hQhqSRHq0XN4ohk2rPSaMngQ08jRztnG4qxWk7d+r/g0O3n+Div0A0nZ/wAtJ/pkativ7f8AyMfQn7Ez1V6PXay3G4S3SjdAyWFjWEkHJBOd4VdpK5pVoxUHj/qN1GnKLeJL9MbfU3XRivoaJgdUTR8Fgc7AJyOMqBbVI060ZyyN9WLlFpFYU2qu/Setmo4f6nl25XL0rRWSbIn/AI0jtqTVEcA1t5x0thh+ZPyWmWll/wAY/wBntW3uyVaNaC2nR2ubW0slVLUhhYHyyDABxnYAOhQa99VrR1JYYG6FGMNqJWoZtNXkNaS4gAcZJQEfvGmditHCbUVrHyt/woPPd+Ck0rKvV3Y7DVOtCGbIFe9aFwqQ6Kz07KRn8WXD5D7vsj8Va0dFU47ajx/HoRZ3Mnuog9XV1NbOZ6yolqJTxvlcXH8eJWcIRgsIrBEdtvM+WV6MHJt9DV3KpbTW+nfPMf8AdYM4HSegLxUqRpR1pvBHqMXJ4ItfRDV9TWtzK27cGqrdjmx8ccR/Ues7OhUN3pF1Vq09kf7f/RNpW6jtltZPAq0khAEAQGDxICtNP9AZKqSS7WKMeVd51RS/vn99vX0jn7c8K4sdIKKVOrl6P2/D/H66ZRK1DH7olWvBa8sc1zXN2EOGCD0EK7xWGJDNoJ5aeVs0Ej45RxPY4tI94WHFSWDyCxW1Exs+sy9UIaysbHXxD+L5j/8AMAfxBVdW0ZSnths/38kiNxOOe0mFu1o2GoAFYyqoX8XnxcNue1uTjtAUCpouvHdwf9fs3q5h6kloNJLJX7KS7Ucrj/utmHC+HGocratDeizaqkHkzs2yxu+zI09hWrA9m6wAgMFzRxuA7SgPhPW0kDeFPUwxjpe8BelCUskYxR0tbpto1SA+UvNK8jjbC7yp+Dclb42VzL/g++z9mt1qa9Toa/WrZYctoqWtq3czuAI2/wCo5/BSoaJrPeaX9/o1u6j6Ijlw1qXeoBFDR01G3mJzK4fHA/BTIaKpLebf9Gp3M3kiLXLSG8XQ/X7jPKDt4AdwW/AKbTtqVPdijTKc5Zs6scEDAGPgt5ryM5QybRsfLIyOFj5JHHDWsGSfdzrDkorGWQSx2E50b1Z3Kvc2a8P/AGClO0xNwZnDo6G/iepVlfSdOKaprF/1/wBkinbOW2WRaVlstBZaUU9upmws5zxud1k8ZVLWrTrSxm8SbCEYLBHZDiWo9BAEAQBAEBg7QgIvpVoTbdIWule39nrMebURDaf6hzhS7a9qUNi2r2NVSjGfUqnSDQu+WNz5JqY1NMP+IpwXDH8w427utXtC9o1sMHg/ZkOdGUNvoRwOzjBzni61Lew1DPQgMOaHjDmjHYiZjBG8U0sOyCWSID+G8t3LDSeaMpP3OS26XJv2blXDsqpP7rx9Kl6xX8I9Yy9zJu9zd9q6V5/9qT+6fSpf4L+EMZe7Pk+vrZPWVtW/+qd53lelCCyS/hGNvucctY45c1pd+8Rlek8MjGqjOfh1IMBwutAZzxdfEhkxwtuM7UMHPtVmut3cG2y31FSDs4bWYYO1xw38VqqV6VLfkkeowlLdRO7HqpqZODJfKxkY54abafe4/IKsraViuFHuyRG1x2yLBsujlrscfBt1JHE7nkO17u1x2qqrXNWs8ZvEkxpxjkjthsC0nsygCAIAgCAID//Z'}
                alt={job.company}
                className="w-24 h-20 rounded-full object-contain"
              />
        )}
        <div>
          {job.updatedAt && (
  <p className="text-sm text-green-600 font-medium">
    before {Math.floor((new Date() - new Date(job.updatedAt)) / (1000 * 60 * 60))} hours ago
  </p>
)}

          <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
          <p className="text-gray-500 mb-3">{job.companyName}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            {job.category && (
              <span className="flex items-center gap-1">
                <Briefcase size={16} /> {job.category}
              </span>
            )}
            {job.type && (
              <span className="flex items-center gap-1">
                <Clock size={16} /> {job.type}
              </span>
            )}
            {job.salary && (
              <span className="flex items-center gap-1">
                <DollarSign size={16} /> {job.salary}
              </span>
            )}
            {job.location && (
              <span className="flex items-center gap-1">
                <MapPin size={16} /> {job.location}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
       <button
  onClick={() => handleJobDetails(job)}
  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-medium transition"
>
  Job Details
</button>

      </div>
    </div>
  );
};

export default JobCard;
