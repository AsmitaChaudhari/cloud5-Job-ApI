/**
 * Jobs062Controller
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    getAll:function(req062, res062){
       Jobs062.find({}).exec( function (err, jobs) {
           if(err){
               res062.send(400, {error: 'Bad Request'});
           }
           res062.view('pages/job_list',{jobs:jobs});
           
           
       })  
    },

    addJob:function(req062, res062){
        res062.view('pages/add_jobs');
    },
    create:function(req062, res062){

     jobName062 = req062.body.jobName062,
     partId062 = req062.body.partId062,
     qty062 = req062.body.qty062
        
        Jobs062.create({jobName062:jobName062, partId062:partId062, qty062:qty062}).exec(function(err){
            if(err){
                res062.status(400).send({error: 'Bad Request'});
            }
            res062.redirect('getAll');
        })
    },

    delete:function(req062, res062){
        Jobs062.destroy({jobName062:req062.params.jobName062}).exec(function(err){
            if(err){
                res062.status(400).send({error: 'Bad Request'});
            }
            res062.redirect('/jobs062/getAll');
        });
        return false;
    },

    edit: function(req062, res062){
        Jobs062.findOne({jobName062:req062.params.jobName062}).exec(function(err, job){
            if(err){
                res062.status(400).send({error: 'Bad request'});
            }
            res062.view('pages/edit_job',{job:job});
        });
    },

    update:function(req062, res062){

        jobName062 = req062.body.jobName062,
        partId062 = req062.body.partId062,
        qty062 = req062.body.qty062
           
           Jobs062.update({jobName062:req062.body.jobName062},{jobName062:jobName062, partId062:partId062, qty062:qty062}).exec(function(err){
               if(err){
                   res062.status(400).send({error: 'Bad Request'});
               }
               res062.redirect('/jobs062/getAll');
           });
           return false;
    }

};

