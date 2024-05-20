import MainTemplate from '@components/templates/MainTemplate'
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import crimeMap from '@common/assets/images/CrimeMap.png'
import portofolio from '@common/assets/images/Portofolio.png'
import Default from '@common/assets/images/Default.png'
import Rank from '@common/assets/images/Rank.png'

export default function PortofolioPage() {
  return (
    <MainTemplate header="Portofolio">
      <div className="mt-4 flex w-full flex-wrap justify-center gap-4  ">
        <Card className="w-[300px] cursor-pointer py-4 hover:z-20 hover:scale-105 dark:bg-[#272733] md:w-[350px] xl:w-[400px]">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-large font-bold">Crime Map</h4>
            <small className="text-default-500">
              A web application that displays crime statistics in Riau,
              Indonesia.
            </small>
            <p className="text-tiny font-bold uppercase">Vue.js, Leaflet</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className=" rounded-xl border-2 border-default-300 object-cover"
              src={crimeMap}
              width={400}
            />
          </CardBody>
        </Card>
        <Card className="w-[300px] cursor-pointer py-4 hover:z-20 hover:scale-105 dark:bg-[#272733] md:w-[350px] xl:w-[400px]">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-large font-bold">Portofolio</h4>
            <small className="text-default-500">
              A web application that displays my personal projects and
              achievements.
            </small>
            <p className="text-tiny font-bold uppercase">React, tailwind</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className=" rounded-xl border-2 border-default-300 object-cover"
              src={portofolio}
              width={400}
            />
          </CardBody>
        </Card>
        <Card className="w-[300px] cursor-pointer py-4 hover:z-20 hover:scale-105 dark:bg-[#272733] md:w-[350px] xl:w-[400px]">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-large font-bold">CMS Web</h4>
            <small className="text-default-500">
              A Content Management System (CMS) web application built using
              React, MUI, and Express.js
            </small>
            <p className="text-tiny font-bold uppercase">
              React, MUI, tailwind, Express, TypeScript
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className=" rounded-xl border-2 border-default-300 object-cover"
              src={Default}
              width={400}
            />
          </CardBody>
        </Card>
        <Card className="w-[300px] cursor-pointer py-4 hover:z-20 hover:scale-105 dark:bg-[#272733] md:w-[350px] xl:w-[400px]">
          <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
            <h4 className="text-large font-bold">Student Ranking Prdiction</h4>
            <small className="text-default-500">
              Predicting student ranking based on their past academic
              performance using linear regression.
            </small>
            <p className="text-tiny font-bold uppercase">
              Python, flask, React
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className=" rounded-xl border-2 border-default-300 object-cover"
              src={Rank}
              width={400}
            />
          </CardBody>
        </Card>
      </div>
    </MainTemplate>
  )
}
