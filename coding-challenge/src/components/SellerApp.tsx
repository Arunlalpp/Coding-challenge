import { useState } from "react";
import classNames from "classnames";

import { SellerData } from "../type";
import defaultSellerJobsDetailsData from "../sellerAppJobs";

export interface SellerAppProps {
  sellerData: SellerData;
}

function SellerApp({ sellerData }: SellerAppProps) {
  const [hovered, setHovered] = useState(false);

  const buttonHoverClassName = classNames(
    "rounded-2xl border border-white p-3 shadow-xl flex justify-center",
    {
      "bg-green-900": !hovered,
      "bg-red-900": hovered,
    }
  );

  const sellerFailedJobsData = defaultSellerJobsDetailsData;

  const sellerFailedJobs = (
    sellerJobs: string[],
    orderInvokedJobs: string[]
  ) => {
    const filteredReport = sellerJobs.filter(
      (sellerJob) => !orderInvokedJobs.includes(sellerJob)
    );
    return filteredReport;
  };
  const retryFailedJobs = (sellerID: string, APIName: string) => {
    console.log(sellerID, APIName);
  };

  // const jobs: string[] = [];
  // const jobsWithId: Record<string, string[]> = {};
  // const pushToArr = (sellers: Sellers) => {
  //   const { reports, sellerID } = sellers;
  //   reports.forEach((job) => {
  //     if (!jobs.includes(job)) {
  //       jobsWithId[sellerID] = [...(jobsWithId[sellerID] || []), job];
  //     }
  //   });
  // };

  const handleRetryFailedJobs = () => {
    setHovered((prev) => !prev);
    alert("Failed job list for the seller app");
    sellerData.failures.map((seller) =>
      seller.sellers.forEach((sellerDetails) => {
        let jobs = sellerDetails.reports;
        if (jobs.includes(sellerFailedJobsData.orderAPI)) {
          jobs = sellerFailedJobs(jobs, sellerFailedJobsData.invokingJobs);
        } else if (jobs.includes(sellerFailedJobsData.orderByUpdatedDateAPI)) {
          jobs = sellerFailedJobs(jobs, sellerFailedJobsData.invokingJobs);
        } else if (
          jobs.includes(
            sellerFailedJobsData.orderItemAPI ||
              sellerFailedJobsData.salesOrderAPI
          )
        ) {
          jobs = sellerFailedJobs(
            jobs,
            sellerFailedJobsData.orderItemAPIOrSalesOrderAPIJobs
          );
        }
        jobs.map((job) => {
          return retryFailedJobs(sellerDetails.sellerID, job);
        });
      })
    );
    // const a = sellerData.failures.forEach((seller) => {
    //   seller.sellers.forEach(pushToArr);
    // });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleRetryFailedJobs}
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={buttonHoverClassName}
      >
        Show retry failed jobs list
      </button>
    </div>
  );
}

export default SellerApp;
